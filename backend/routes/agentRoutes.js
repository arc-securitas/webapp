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
agentRoutes.route("/agents").get(function (req, res) {
    db_connect
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});


// Gets a single agent record by id
agentRoutes.route("/agents/:id").get(function (req, res) {
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

// Create a new agent record.
agentRoutes.route("/agents/add").post(function (req, res) {
    let agent = new Agent();
    assignValues(agent, req.body);

    agent.save(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Updates a single agent record by id
agentRoutes.route("/agents/update/:id").post(function (req, res) {
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

// Deletes a single agent record by id
agentRoutes.route("/agents/delete/:id").delete((req, res) => {
    Agent.findByIdAndDelete(ObjectId(req.params.id), function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Assigns values to the agent's properties
function assignValues(agent, values) {
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

    // Country Code
    if (values.countryCode != undefined) {
        agent.countryCode = values.countryCode;
    }

    // Phone Number
    if (values.phoneNumber != undefined) {
        agent.phoneNumber = values.phoneNumber;
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
}

module.exports = agentRoutes;