const mongoose = require("mongoose");
const express = require("express");

// agentRoutes is an instance of the express router
// Used to define our routes for agents
// The router will be added as a middleware and will take control of requests starting with path /agent.
const emailRoutes = express.Router();
const Email = require("../schemas/email.js");

emailRoutes.route("/api/emails/add").post(function (req, res) {
    console.log("Here");
    let newEmail = new Email();
    if (req.body.email !== undefined) {
        console.log(req.body.email);
        newEmail.email = req.body.email;
        console.log(newEmail.email);
        newEmail.save(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
});

module.exports = emailRoutes;