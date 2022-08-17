function hashStringtoInt(s, tableLength) {
  let hash = 17;
  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableLength;
  }

  hash = hash % tableLength;
  console.log(hash);
  return hash;
}
class HashTable {
  table = new Array(11);

  setItem = (key, value) => {
    const idx = hashStringtoInt(key, this.table.length);
    this.table[idx] = value;
  };

  getItem = (key) => {
    const idx = hashStringtoInt(key, this.table.length);
    return this.table[idx];
  };
}

const myTable = new HashTable();

console.log(myTable);
myTable.setItem("firstName", "Yash");
console.log(myTable);
myTable.setItem("lastName", "Gada");
console.log(myTable);
console.log(myTable.getItem("firstName"));
