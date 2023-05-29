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
        .find(query)
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

alertRoutes.route("/api/alerts/viewed/:managerEmail/:id").post(function (req, res) {
    console.log("there");
    const filter = { managerEmail: req.params.managerEmail, _id: new ObjectId(req.params.id) };
    const update = { viewed: true }
    Alert.findOneAndUpdate(filter, { $set: {viewed: true}}, { new: true }, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });

    // Alert.updateOne()

    // Alert.findOne(filter, function (err, alert) {
    //     if (err) throw err;
    //     if (alert != null) {
    //         let newA = { ...alert}
    //         console.log(newA.viewed);
    //         console.log(newA);
    //         newA.viewed = true;
    //         console.log(newA);

    //         // console.log(alert)
    //         // assignViewed(alert);
    //         // console.log(alert)

    //         alert.save(function (err, result) {
    //             if (err) throw err;
    //             res.json(result);
    //         });
    //     }
    // });
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

    if (values.timezone != undefined) {
        alert.timezone = values.timezone;
    }
    if (values.latitude != undefined) {
        alert.latitude = values.latitude;
    }
    if (values.longitude != undefined) {
        alert.longitude = values.longitude;
    }

    if (values.audioTranscription != undefined) {
        alert.audioTranscription = values.audioTranscription;
    }

    if (values.managerEmail != undefined) {
        alert.managerEmail = values.managerEmail;
    }
}

module.exports = alertRoutes;