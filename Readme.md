1. Create a class to be instantiated
2. Spec out the API. Create the getter/setter functions and returns
   - Maybe setup the console logs for the expected outputs
3. Setup the hash array, initialize it with the new Array constructor cause you
   need it to have a certain size.
4. Input key can be a string, so need to convert to some arbitrary value for
   now. Setup a hashing func for it.
5. Pass the key through the hashing func, which gives you the hash value and
   store the value param on the hash array, at the index equal to the hash
   value.
6. At this point, you should be able to set and get a value once you instantiate
   and run the methods on the instance.

- Now we deal with collisions

7. Change the value param being stored in the hash array/table from value param,
   to an array of [key,value]. We are now storing the hash table as a 3D array,
   to store collisions of hash values. 1st dimension for hash value, second
   dimension for the different values at the hash, 3rd dimension to store the
   actual key and value pair.
8. For any value being set, first check if a Value exists for its hash key,
   assign the key value pair in a 2D array if not, or push it on the existing
   array
9. for getting the value, get the hash value of the key, loop through the array
   in the hash table at the hash key where key matches desired one and return it

- Now we deal with increasing the size of the hashmap dynamically

10. Set a counter for every addition of item to the hash
11. Set a condition, if the load increases a certain limit, the size of the hash
    map is increased. Doubled simply if needed. load of 0.8 is common as per Ben
    Awad
12. For when the condition is hit, setup a resize function. In it, make the new
    map, loop through the existing map, all nodes, and rehash and reprocess and
    build the entire map again and populate it.
13. Perform tests

_Hashing function_ One way of doing the hashing function is:

- Take a prime
- Loop to the string, convert and multiple each char's unicode value to the hash
- return the mod of table length, as we want the size in those limits
