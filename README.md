# Backend
The backend of this application is based on the **MERN** (**M**ongoDB, **E**xpress, **R**eact, and **N**odeJS) Stack. MongoDB serves as the database and use NodeJS to manage the web server. Mongoose is used to connect the MongoDB database to the NodeJS server. Express is the framework that is the middleware between the frontend and the NodeJS server and is useful for routing client requests.

## Schema
This application uses schemas for each table in the MongoDB database even though MongoDB does not require them. The schemas provide a blueprint or structure of the data that is stored in each table.

Sechma Actions:
- Creating a schema
  - When adding a table/collection to the database for this application, it is highly reccomended to create a corresponding schema.
  
- Modifying a schema
  - If there are changes to the types of data stored in a database table/collection, modify the existing schema.

- Using a schema
  - When querying, inserting, or mutating data, import the schema in the appropriate places and follow the blueprint set by the schema.

### Schema Creation
1. Create a javascript file in the ```backend/schemas``` folder with a name that represents the schema (Ex. ```agents.js```)
2. Import mongoose and the Schema keyword 
```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
```
3. Define the schema 
```
const agentSchema = new Schema({
    // Name
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
    
    // contact info
    countryCode: String,  // Needed?
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    
    //...Rest of definition...
});
```

4. Construct and export the model based on the schema
```
module.exports = mongoose.model('Agent', agentSchema, 'agents');
```
The third parameter in the mongoose.model constructor represents the name of the collection associated with the schema. It is not required by mongoose and if not included it will default to a collection name that is the lowercase and pluralized form of the first parameter in the constructor. It is good practice to include the third parameter even if it matches the default collection name to ensure that the schema is associated with the correct collection.



## Routes

## API Calls

## Helpful Links
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
  - Official Mongoose library documentation. Please refer to this for any questions regarding the Mongoose library.

- [Express Tutorial Part 3: Using a Database (with Mongoose)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#defining_the_locallibrary_schema)
  - This is part 3 of an Express tutorial. Other parts of this tutorial may also be useful to reference

- [How to Use MERN Stack: A Complete Guide](https://www.mongodb.com/languages/mern-stack-tutorial)
  - The tutorial above does not use Mongoose unlike this application

<sub>Note: The links above may be broken, unavailable, or outdated in the future after the publishing of this document</sub> 
