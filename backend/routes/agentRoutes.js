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
let db_connect = mongoose.connection.db.collection("agents");

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
recordRoutes.route("/agents/:id").get(function (req, res) {
    let query = Agent.where({ _id: ObjectId(req.params.id) });
    query.findOne(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Create a new agent record.
recordRoutes.route("/agents/add").post(function (req, res) {
    let agent = new Agent();

    // Name
    agent.firstName = req.body.firstName;
    agent.middleName = req.body.middleName;
    agent.lastName = req.body.lastName;

    // Contact info
    agent.countryCode = req.body.countryCode;
    agent.phoneNumber = req.body.phoneNumber;
    agent.email = req.body.email;

    agent.safetyCode = req.body.safetyCode;
    agent.location = req.body.location;
    agent.status = req.body.status;

    agent.save(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = agentRoutes;