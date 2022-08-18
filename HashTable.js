function hashStringtoInt(s, tableLength) {
  let hash = 17;
  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableLength;
  }
  console.log(hash);
  return hash;
}
class HashTable {
  table = new Array(3);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);

    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringtoInt(key, newTable.length);
          if (!newTable[idx]) {
            newTable[idx] = [[key, value]];
          } else if (newTable[idx]) {
            newTable[idx].push([key, value]);
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = function (key, value) {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      //   resize
      this.resize();
    }

    const idx = hashStringtoInt(key, this.table.length);
    if (!this.table[idx]) {
      this.table[idx] = [[key, value]];
    } else if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      console.log("We have a problem");
    }
  };

  getItem = function (key) {
    const idx = hashStringtoInt(key, this.table.length);
    if (!this.table[idx]) return null;
    return this.table[idx].find((x) => x[0] === key)[1];
  };
}

const myTable = new HashTable();

console.log(myTable);
myTable.setItem("firstName", "Yash");
console.log(myTable.table);
myTable.setItem("lastName", "Gada");
myTable.setItem("age", "27");
myTable.setItem("dob", "9/7/1995");
console.log(myTable.table);
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
console.log(myTable.getItem("age"));
console.log(myTable.getItem("dob"));
console.log(myTable.table.length);
