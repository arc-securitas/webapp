# Backend
The backend of this application is based on the **MERN** (**M**ongoDB, **E**xpress, **R**eact, and **N**odeJS) Stack. MongoDB serves as the database and ==use== NodeJS to manage the web server. Mongoose is used to connect the MongoDB database to the NodeJS server. Express is the framework that is the middleware between the frontend and the NodeJS server and is useful for routing client requests.

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
The third argument in the mongoose.model constructor represents the name of the collection associated with the schema. It is not required by mongoose and if not included it will default to a collection name that is the lowercase and pluralized form of the first argument in the constructor. It is good practice to include the third argument even if it matches the default collection name to ensure that the schema is associated with the correct collection.


## Routes
This application uses Express for routing frontend requests to the NodeJS server.

### Route Actions
- Setting up routes file for a table/collection
  - When a new table/collection is added to the database, a file must be set up to store all the routes associated with the table/collection.
- Creating a new route
  - If there is a user request that needs to be supported and is not part of the currently supported requests, then create a new route.
- Modifying a route
  - If there needs to be a change in the way a user request is handled, then modify the route that handles that request
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
2. Create the route before the export line of code in the file. Use the following template: ```<EXPRESS-ROUTER>.route(<PATH>).<METHOD>(<HANDLER>);```
3. Inside the route, create a handler function with a request parameter and a response parameter.
4. Inside the handler function, perform the data interactions using mongoose (refer to the mongoose documentation for more information of syntax).
5. Catch any potential error and throw it.
5. Send the final result of the data interaction as a JSON response using the following line: ```res.json(result);```.

There are four main types of route handlers: get, post, update, and delete. There are other handlers that might be useful and they can be found in the Express documentation.

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
HTTP requests are used by the frontend to communicate with the backend. ==The results of the HTTP requests as a state in the frontend.==
1. Import the state hook. Import any other hooks such as the effect, params, and navigate based on the need.
```
import React, { useState } from 'react';
```
2. Set up the state variable using the state hook and define the structure as a argument within the ```useState()``` function
```
const [records, setRecords] = useState(/** Structure */);
```
3. Create an ```async``` function and within the function, add an ```await fetch```, and pass in the route path with the rest of the HTTP request into the fetch
4. Check if the HTTP request threw an error using ```!response.ok``` and if so, output an error message and return. 
5. Otherwise, if using a GET request, convert the response from JSON format into javascript object format and assign it to the state variable. If using a POST request, it might be necessary to reset the state variable back to default values.
```
// For GET request
const records = await response.json();
setRecords(records);
```
```
// For POST request
// form is the state variable in this example
setForm({ firstName: "", lastName: "", phoneNumber: "", email: "" });
```

6. Call the async function from the desired spot in the frontend. This async function can be called after a button click, after the page loads, etc.
7. Display the results of the HTTP request using the state variable, if needed.

The four most common requests are GET, POST, PUT, and DELETE.

GET request example:
```
// Gets all agent records from database
async function getRecords() {
  const response = await fetch(`/agents/`);

  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    window.alert(message);
    return;
  }

  const records = await response.json();
  setRecords(records);
}
```

POST Request example:
```
// Adds an agent when the "Submit" button is clicked
async function onSubmit(e) {
  // preventDefault() is specific to the onSubmit() function
  // it is not required for the POST request
  e.preventDefault(); 
  
  // form is the state variable in this example
  const newAgent = { ...form }; 

  await fetch("/agents/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    
    // convert from javascript object to JSON format
    body: JSON.stringify(newAgent), 
  })
    .catch(error => {
      window.alert(error);
      return;
    });
  
  // form is the state variable in this example
  setForm({ firstName: "", lastName: "", phoneNumber: "", email: "" });
}
```

DELETE Request example:
```
// Deletes an agent record based on id
async function deleteRecord(id) {
  // ${id} adds the passed in id value into route path
  await fetch(`/agents/delete/${id}`, {
    method: "DELETE"
  });
  
  // Removes the corresponding record from state variable
  const newRecords = records.filter((el) => el._id !== id);
  setRecords(newRecords);
}
```


## Helpful Links
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
  - Official Mongoose library documentation. Please refer to this for any questions regarding the Mongoose library.

- [Express Routing Guide](http://expressjs.com/en/guide/routing.html)
  - Official Express guide for routing. Please refer to this and the rest of the Express website for any questions regarding Express.

- [Express Tutorial Part 3: Using a Database (with Mongoose)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#defining_the_locallibrary_schema)
  - This is part 3 of an Express tutorial. Other parts of this tutorial may also be useful to reference

- [How to Use MERN Stack: A Complete Guide](https://www.mongodb.com/languages/mern-stack-tutorial)
  - The tutorial above does not use Mongoose unlike this application

<sub>Note: The links above may be broken, unavailable, or outdated in the future after the publishing of this document</sub> 
