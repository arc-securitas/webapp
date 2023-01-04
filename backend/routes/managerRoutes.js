const mongoose = require("mongoose");
const express = require("express");

const managerRoutes = express.Router();

const ObjectId = require("mongodb").ObjectId;

let db_connect = mongoose.connection.collection("managers");

// Get all managers
managerRoutes.route("/managers").get(function (req, res) {
    db_connect.find().toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Get manager matching given email
managerRoutes.route("/managers/:email").get(function (req, res) {
    db_connect.find({email: req.params.email}).toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = managerRoutes;