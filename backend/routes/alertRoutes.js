const mongoose = require("mongoose");
const express = require("express");

// alertRoutes is an instance of the express router
// Used to define our routes for alerts
// The router will be added as a middleware and will take control of requests starting with path /alert.
const alertRoutes = express.Router();

// Get alert model
const Alert = require('../schemas/alert.js');

// Convert the id from string to ObjectId for the _id
const ObjectId = require("mongodb").ObjectId;

// Connection to alerts collection in database
let db_connect = mongoose.connection.collection("alerts");

// Get a list of all the alert records
alertRoutes.route("/api/alerts").get(function (req, res) {
    db_connect
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

alertRoutes.route("/api/alerts/getById/:id").get(function (req, res) {
    var ObjectId = (require('mongoose').Types.ObjectId);
    var query = { _id: new ObjectId(req.params.id) };

    db_connect
      .find ( query )
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

alertRoutes.route("/api/alerts/:managerEmail/:startDate/:endDate").get(function (req, res) {
    let startDate = new Date(req.params.startDate);
    let endDate = new Date(req.params.endDate);
    let managerEmail = req.params.managerEmail;
    db_connect
        .find({ managerEmail: managerEmail, dateTime: { $gte: startDate, $lt: endDate } })
        .sort({ dateTime: -1 })
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Create a new alert record.
alertRoutes.route("/api/alerts/add").post(function (req, res) {
    let alert = new Alert();
    assignValues(alert, req.body);

    alert.save(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

alertRoutes.route("/api/alerts/:startDate/:endDate").get(function (req, res) {
    let startDate = new Date(req.params.startDate);
    let endDate = new Date(req.params.endDate)
    db_connect
        .find({ dateTime: { $gte: startDate, $lt: endDate } })
        .sort({ dateTime: -1 })
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Assigns values to the agent's properties
function assignValues(alert, values) {
    if (values.agent != undefined) {
        alert.agent = values.agent;
    }

    if (values.event != undefined) {
        alert.event = values.event;
    }

    if (values.dateTime != undefined) {
        alert.dateTime = values.dateTime;
    }

    if (values.audioTranscription != undefined) {
        alert.audioTranscription = values.audioTranscription;
    }

    if (values.managerEmail != undefined)
    {
        alert.managerEmail = values.managerEmail;
    }
}

module.exports = alertRoutes;