const mongoose = require("mongoose");
const express = require("express");

// agentRoutes is an instance of the express router
// Used to define our routes for agents
// The router will be added as a middleware and will take control of requests starting with path /agent.
const emailRoutes = express.Router();
const Email = require("../schemas/email.js");

emailRoutes.route("/emails/add").post(function (req, res) {
    let email = new Email();
    if (req.body.email !== undefined) {
        console.log(req.body.email)
        email.email = req.body.email;
        console.log(email.email)
        email.save(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
});