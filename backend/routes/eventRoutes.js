const mongoose = require("mongoose");
const express = require("express");

const ObjectId = require("mongodb").ObjectId;
const eventRoutes = express.Router();
const Event = require('../schemas/event.js');
let db_connect = mongoose.connection.collection("events");

eventRoutes.route("/events/:date").get(function (req, res) {
  db_connect
    .find({ date: new Date(req.params.date) })
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

eventRoutes.route("/events/:startDate/:endDate").get(function (req, res) {
  let startDate = new Date(req.params.startDate);
  let endDate = new Date(req.params.endDate)
  db_connect
      .find({ date: { $gte: startDate, $lt: endDate } })
      .toArray(function (err, result) {
          if (err) throw err;
          res.json(result);
      });
});

eventRoutes.route("/events/:managerEmail/:startDate/:endDate").get(function (req, res) {
  let startDate = new Date(req.params.startDate);
  let endDate = new Date(req.params.endDate);
  let managerEmail = req.params.managerEmail;
  db_connect
      .find({ managerEmail: managerEmail, date: { $gte: startDate, $lt: endDate } })
      .toArray(function (err, result) {
          if (err) throw err;
          res.json(result);
      });
});

eventRoutes.route("/events/add").post(function (req, res) {
  let event = new Event();
  assignValues(event, req.body);

  event.save(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

function assignValues(event, values) {
  // if (values.agents != undefined)
  //   event.agents = values.agents;
  if (values.eventName != undefined)
    event.eventName = values.eventName;
  // if (values.clients != undefined)
  //   event.clients = values.clients;
  if (values.eventType != undefined)
    event.eventType = values.eventType;
  if (values.location != undefined)
    event.location = values.location;
  if (values.date != undefined)
    event.date = values.date;
  if (values.startTime != undefined)
    event.startTime = values.startTime;
  if (values.endTime != undefined)
    event.endTime = values.endTime;
  if (values.managerEmail != undefined)
    event.managerEmail = values.managerEmail;
}

module.exports = eventRoutes;