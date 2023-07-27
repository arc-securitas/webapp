const mongoose = require("mongoose");
const express = require("express");

const managerRoutes = express.Router();

const Manager = require('../schemas/manager.js');
const ObjectId = require("mongodb").ObjectId;
let db_connect = mongoose.connection.collection("managers");

// Get all managers
managerRoutes.route("/api/managers").get(function (req, res) {
    db_connect.find().toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Get manager matching given email
managerRoutes.route("/api/managers/:email").get(function (req, res) {
    db_connect.find({email: req.params.email}).toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Updates the given manager info (based on their email). Middle name is optional.
// managerRoutes.route("/api/managers/update/:email/:firstName/:middleName?/:lastName/:phoneNumber").post(function (req, res) {
managerRoutes.route("/api/managers/update/:email/:fullName/:phoneNumber/:emailAddress/:brokerage/:streetAddress/:cityAddress/:stateAddress/:zipAddress").post(function (req, res) {
    db_connect.updateOne(
        {email: req.params.email},
        {$set: {user_metadata: {
            fullName: req.params.fullName, // changed from first name
            // middleName: req.params.middleName == null ? "" : req.params.middleName,
            // lastName: req.params.lastName,
            phoneNumber: req.params.phoneNumber,
            emailAddress: req.params.emailAddress,
            brokerage: req.params.brokerage,
            streetAddress: req.params.streetAddress,
            cityAddress: req.params.cityAddress,
            stateAddress: req.params.stateAddress,
            zipAddress: req.params.zipAddress,
        }}},
        function (err, result) {
            if (err) throw err;
            res.json(result);
        }
    );
});

module.exports = managerRoutes;