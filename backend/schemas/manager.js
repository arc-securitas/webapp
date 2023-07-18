//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

const managerSchema = new Schema({

    // Updated Profile info
    fullName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    brokerage: { type: String, required: true },
    streetAddress: { type: String, required: true },
    cityAddress: { type: String, required: true },
    stateAddress: { type: String, required: true },
    zipAddress: { type: String, required: true },

    // contact info
    countryCode: String,  // Needed?
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String, unique: true, required: true },

    // list of agents
    agents: [Schema.Types.ObjectId]
});

// export the user schema 
module.exports = mongoose.model("Manager", managerSchema);