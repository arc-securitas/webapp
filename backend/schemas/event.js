var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const eventSchema = new Schema({
  // Agents-
  agents: [{
    firstName: {type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
  }],

  // Event-
  eventName: String, // Default location + eventType or location + client
  clients: [{
    firstName: String,
    lastName: String,
  }],
  eventType: { type: String, enum: ['Showing', 'Open House', 'Other'] },
  location: { type: String, required : true },
  startTime: Date,
  endTime: Date,

  managerEmail: String,
  // TODO: Related Alerts-
});

module.exports = mongoose.model("Event", eventSchema, "events");