1. Create a class to be instantiated
2. Spec out the API. Create the getter/setter functions and returns
   - Maybe setup the console logs for the expected outputs
3. Setup the hash array, initialize it with the new Array constructor cause you
   need it to have a certain size.
4. Input key can be a string, so need to convert to some arbitrary value for
   now. Setup a hashing func for it.
5. Pass the key through the hashing func and store the value param in the index
   of the hash value as index of the hash array.

_Hashing function_ One way of doing the hashing function is:

- Take a prime
- Loop to the string, convert and multiple each char's unicode value to the hash
- return the mod of table length, as we want the size in those limits
