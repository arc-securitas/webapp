//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

const managerSchema = new Schema({
    // Name
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },

    // contact info
    countryCode: String,  // Needed?
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String, unique: true, required: true },

    // list of agents
    agents: [Schema.Types.ObjectId]
});

// export the user schema 
module.exports = mongoose.model("Manager", managerSchema);