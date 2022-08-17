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
8.

_Hashing function_ One way of doing the hashing function is:

- Take a prime
- Loop to the string, convert and multiple each char's unicode value to the hash
- return the mod of table length, as we want the size in those limits
