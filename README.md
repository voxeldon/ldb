# LDB
A lightweight local database format for minecraft bedrock.

The `LDB` class provides an interface for managing Minecraft's scoreboard objectives, allowing you to create a local database structure.

## Table of Contents
- [LDB](#ldb)
  - [Table of Contents](#table-of-contents)
    - [Initialization](#initialization)
    - [Generating UUIDs](#generating-uuids)
    - [Database Management](#database-management)
    - [Key Management](#key-management)
    - [Array Storage](#array-storage)
    - [Get entry from an Aray](#get-entry-from-an-aray)

---

### Initialization
To start using the LDB class, first, you need to initialize it:

```javascript
const db = new LDB();
```

---

### Generating UUIDs

You can generate a new UUID using the `newUUID` method:

```javascript
const uuid = db.newUUID();
console.warn(uuid);
```

---

### Database Management

1. **Creating a New Database**

   You can create a new database by specifying its ID:

   ```javascript
   db.newDB("myDatabase");
   ```

2. **Removing a Database**

   To remove a database, provide its ID:

   ```javascript
   db.removeDB("myDatabase");
   ```

3. **Fetching a Database**

   To get a database, simply provide its ID:

   ```javascript
   const db = db.getDB("myDatabase");
   console.warn(db);
   ```

---

### Key Management

1. **Add Value to a Key**

   Add a value to a specific key inside a database:

   ```javascript
   db.addToKey("myDatabase", "keyId", 50);
   ```

2. **Set Value for a Key**

   Set a value for a specific key:

   ```javascript
   db.setKey("myDatabase", "keyId", 100);
   ```

3. **Remove a Key**

   To remove a key from a database, provide the key's name:

   ```javascript
   db.removeKey("myDatabase", "keyId");
   ```

4. **Retrieve a Key's Value**

   To fetch the value associated with a key:

   ```javascript
   const value = db.getKey("myDatabase", "keyId");
   console.warn(value);
   ```

5. **Get All Keys and Values**

   Retrieve all keys and their associated values:

   ```javascript
   const entries = db.getAllKeys("myDatabase");
   console.warn(entries);
   ```

---

### Array Storage

1. **Store an Array**

   To store an array linked to a specific key:

   ```javascript
   const myArray = ["Red", "Blue", "Green"];
   db.setArray("myDatabase", "keyId", myArray);
   ```

2. **Retrieve an Array**

   Fetch an array associated with a specific key:

   ```javascript
   const retrievedArray = db.getArray("myDatabase", "playerData");
   console.warn(retrievedArray);
   ```

---

### Get entry from an Aray
```js
        const allKeys = DB.getAllKeys('test');
        console.warn(JSON.stringify(allKeys, null, 2));
        
        const Steve = allKeys.find(entry => entry.key === "Steve");
        console.warn(JSON.stringify(Steve));
```