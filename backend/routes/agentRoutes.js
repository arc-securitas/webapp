const mongoose = require("mongoose");
const express = require("express");

// agentRoutes is an instance of the express router
// Used to define our routes for agents
// The router will be added as a middleware and will take control of requests starting with path /agent.
const agentRoutes = express.Router();

// Get agent model
const Agent = require('../schemas/agent.js');

// Convert the id from string to ObjectId for the _id
const ObjectId = require("mongodb").ObjectId;

// Connection to agents collection in database
let db_connect = mongoose.connection.collection("agents");

// Get a list of all the agent records
agentRoutes.route("/api/agents").get(function (req, res) {
    db_connect
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});


// Get a list of all agents specific to the manager in manageAgents page
agentRoutes.route("/api/agents/:managerEmail").get(function (req, res) {
    let managerEmail = req.params.managerEmail;
    db_connect
        .find({managerEmail: managerEmail})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

agentRoutes.route("/api/agents/:managerEmail/:id").get(function (req, res) {
    let agentID = ObjectId(req.params.id);
    let managerEmail = req.params.managerEmail;
    Agent.findOne({_id: agentID, managerEmail: managerEmail}, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Gets a single agent record by id
agentRoutes.route("/api/agents/:id").get(function (req, res) {
    Agent.findById(ObjectId(req.params.id), function (err, result) {
        if (err) throw err;
        res.json(result);
    });

    // let query = Agent.where({ _id: ObjectId(req.params.id) });
    // query.findOne(function (err, result) {
    //     if (err) throw err;
    //     res.json(result);
    // });
});

agentRoutes.route("/api/agents/:managerEmail/:id").get(function (req, res) {
    let agentID = ObjectId(req.params.id)
    let managerEmail = req.params.managerEmail;
    Agent.findOne({_id: agentID, managerEmail: managerEmail}, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Create a new agent record.
agentRoutes.route("/api/agents/add/").post(function (req, res) {
    let agent = new Agent();
    assignValues(agent, req.body);

    agent.save(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Updates a single agent record by id
agentRoutes.route("/api/agents/update/:id").post(function (req, res) {
    Agent.findById(ObjectId(req.params.id), function (err, agent) {
        if (err) throw err;
        if (agent != null) {
            assignValues(agent, req.body);
            agent.save(function (err, result) {
                if (err) throw err;
                res.json(result);
            });
        }

    });
});

// Updates a single agent record by id
agentRoutes.route("/api/agents/update/:managerEmail/:id").post(function (req, res) {
    let agentID = ObjectId(req.params.id);
    let managerEmail = req.params.managerEmail;
    Agent.findOne({_id: agentID, managerEmail: managerEmail}, function (err, agent) {
        if (err) throw err;
        if (agent != null) {
            assignValues(agent, req.body);
            agent.save(function (err, result) {
                if (err) throw err;
                res.json(result);
            });
        }

    });
});

// Deletes a single agent record by id
agentRoutes.route("/api/agents/delete/:id").delete((req, res) => {
    Agent.findByIdAndDelete(ObjectId(req.params.id), function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Deletes a single agent record by id
agentRoutes.route("/api/agents/delete/:managerEmail/:id").delete((req, res) => {
    let agentID = ObjectId(req.params.id);
    let managerEmail = req.params.managerEmail;
    Agent.findOneAndDelete({_id: agentID, managerEmail: managerEmail}, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Assigns values to the agent's properties
function assignValues(agent, values) {
    /* 
    // First Name
    if (values.firstName != undefined) {
        agent.firstName = values.firstName;
    }
    
    // Middle Name
    if (values.middleName != undefined) {
        agent.middleName = values.middleName;
    }

    // Last Name
    if (values.lastName != undefined) {
        agent.lastName = values.lastName;
    }
    */
       
    // Full Name
       if (values.fullName != undefined) {
        agent.fullName = values.fullName;
    }

    // Phone Number
    if (values.phoneNumber != undefined) {
        agent.phoneNumber = values.phoneNumber;
    }
       
    // Email Address
       if (values.emailAddress != undefined) {
        agent.emailAddress = values.emailAddress;
    }
       
    // Brokerage
       if (values.brokerage != undefined) {
        agent.brokerage = values.brokerage;
    }
       
    // Street Address
       if (values.streetAddress != undefined) {
        agent.streetAddress = values.streetAddress;
    }
       
    // City Address
       if (values.cityAddress != undefined) {
        agent.cityAddress = values.cityAddress;
    }
       
    // State Address
       if (values.stateAddress != undefined) {
        agent.stateAddress = values.stateAddress;
    }
       
    // Zip Address
       if (values.zipAddress != undefined) {
        agent.zipAddress = values.zipAddress;
    }

    // Country Code
    if (values.countryCode != undefined) {
        agent.countryCode = values.countryCode;
    }

    // Email
    if (values.email != undefined) {
        agent.email = values.email;
    }

    // Safety Code
    if (values.safetyCode != undefined) {
        agent.safetyCode = values.safetyCode;
    }

    // Location
    if (values.location != undefined) {
        agent.location = values.location;
    }

    // Status
    if (values.status != undefined) {
        agent.status = values.status;
    }

    // Events
    if (values.contacts != undefined)
    {
        agent.contacts = values.contacts;
    }

    // Contacts
    if (values.events != undefined)
    {
        agent.events = values.events;
    }

    // Manager Email
    if (values.managerEmail != undefined)
    {
        agent.managerEmail = values.managerEmail;
    }

    // License Id
    if (values.licenseID != undefined)
    {
        agent.licenseID = values.licenseID;
    }
}

module.exports = agentRoutes;