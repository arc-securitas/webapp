# Backend
The backend of this application is based on the **MERN** (**M**ongoDB, **E**xpress, **R**eact, and **N**odeJS) Stack. MongoDB serves as the database and use NodeJS to manage the web server. Mongoose is used to connect the MongoDB database to the NodeJS server. Express is the framework that is the middleware between the frontend and the NodeJS server and is useful for routing client requests.

## Schema
This application uses schemas for each table in the MongoDB database even though MongoDB does not require them. The schemas provide a blueprint or structure of the data that is stored in each table.

### Schema Actions
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
This application uses Express for routing frontent requests to the NodeJS server.

### Route Actions
- Setting up routes file for a table/collection
  - When a new table/collection is added to the database, a file must be set up to store all the routes associated with the table/collection.
- Creating a new route
  - If there is a user request that needs to supported and is not part of the currently supported requests, then create a new route.
- Modifying a route
  - If there needs to be change in the way a user request is handled, then modify the route that handles that request
- Using a route
  - When the frontend user sends a request, use an existing route to handle the request.

### Routes File Setup for Table/Collection
1. Create a javascript file in the ```backend/routes``` folder with a name that represents the routes file (Ex. ```agentsRoutes.js```)
2. Import mongoose and express
```
const mongoose = require("mongoose");
const express = require("express");
```
3. Import ObjectID object from MongoDB which will be used to convert strings representing an object's id to the proper ObjectID format
```
const ObjectId = require("mongodb").ObjectId;
```
4. Create an instance of the express router
```
const agentRoutes = express.Router();
```
5. Import the schema model associated with routes
```
const Agent = require('../schemas/agent.js');
```
6. Establish connection with the table/collection in the database. Pass in the name of the collection as a string.
```
let db_connect = mongoose.connection.collection("agents");
```
7. Export the routes
```
module.exports = agentRoutes;
```
8. Navigate to the ```backend/server.js``` file and import the routes file using the ```app``` object which represents an Express application
```
app.use(require("./routes/agentRoutes"));
```

### Route Creation
This includes creating a new route, developing the functionality to interact with data, and assigning that new route to the new functionality.

1. Navigate to the routes file that corresponds to the desired data in the ```backend/routes``` folder.
2. Create the route before the export line of code in the file.
3. Inside the route, create a functions with a request parameter and a response parameter
4. Inside the function, perform the data interactions using mongoose (refer to the mongoose documentation for more information of syntax)
5. Assign the response variable to the final result of the data interaction using the following line: ```res.json(result);```
6. Catch any potential error and throw it

There are four main types of routes: get, post, update, and delete.

Get Route Example:
```
// Get a list of all the agent records
agentRoutes.route("/agents").get(function (req, res) {
    db_connect
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});    
```

Post Route Example:
```
// Create a new agent record.
agentRoutes.route("/agents/add").post(function (req, res) {
    let agent = new Agent();
    
    // assignValues method is defined in backend/routes/agentRoutes.js
    // Assigns the values from the client request to the agent model
    assignValues(agent, req.body);  

    agent.save(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});
```

Update Route Example:
```
// Updates a single agent record by id
agentRoutes.route("/agents/update/:id").post(function (req, res) {
    Agent.findById(ObjectId(req.params.id), function (err, agent) {
        if (err) throw err;
        if (agent != null) {
        
            // assignValues method is defined in backend/routes/agentRoutes.js
            // Assigns the values from the client request to the agent model
            assignValues(agent, req.body);
            
            agent.save(function (err, result) {
                if (err) throw err;
                res.json(result);
            });
        }

    });
});
```

Delete Route Example:
```
// Deletes a single agent record by id
agentRoutes.route("/agents/delete/:id").delete((req, res) => {
    Agent.findByIdAndDelete(ObjectId(req.params.id), function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});
```


## API Calls




## Helpful Links
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
  - Official Mongoose library documentation. Please refer to this for any questions regarding the Mongoose library.

- [Express Tutorial Part 3: Using a Database (with Mongoose)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#defining_the_locallibrary_schema)
  - This is part 3 of an Express tutorial. Other parts of this tutorial may also be useful to reference

- [How to Use MERN Stack: A Complete Guide](https://www.mongodb.com/languages/mern-stack-tutorial)
  - The tutorial above does not use Mongoose unlike this application

<sub>Note: The links above may be broken, unavailable, or outdated in the future after the publishing of this document</sub> 
