//Require Mongoose
var mongoose = require('mongoose');

//Require bycrypt
const bcrypt = require("bcryptjs");
const saltRounds = 10;

//Define a schema
var Schema = mongoose.Schema;

const agentSchema = new Schema({
    // Name
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },

    // contact info
    countryCode: String,  // Needed?
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String, unique: true, required: true, lowercase: true }, // required: true ?

    safetyCode: String, 
    location: String,
    status: { type: String, enum: ['Active', 'Pending', 'Inactive', 'Other'] },

    // emergency contacts list
    contacts: [{
        // Name
        firstName: { type: String, required: true },
        middleName: String,
        lastName: { type: String, required: true },

        // contact info
        countryCode: String,  // Needed?
        phoneNumber: { type: String, required: true }
    }],
    
    // list of showings or open house events
    event: [{
        name: String, // Default location + eventType or location + client
        client: String,
        location: {type: String, required: true},
        startTime: Date, 
        endTime: Date,
        eventType: { type: String, enum: ['Showing', 'Open House', 'Other'] }
    }]

});

agentSchema.pre(save, function (next) {
    var agent = this;

    // only hash the safety code if it is new or has been modified
    if (!agent.isModified('safetyCode')) return next();

    // generate a salt
    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) return next(err);

        // hash the safety code using our new salt
        bcrypt.hash(agent.safetyCode, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext safety code with the hashed one
            agent.safetyCode = hash;
            next();
        });
    });
});

agentSchema.methods.compareSafetyCode = function (safetyCode, callback) {
    bcrypt.compare(safetyCode, this.safetyCode, function (error, isMatch) {
        if (error) {
            return callback(error)
        } else {
            callback(null, isMatch)
        }
    })
}

// export the user schema 
module.exports = mongoose.model('Agent', agentSchema, 'agents');