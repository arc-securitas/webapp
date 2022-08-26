//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

const emailSchema = new Schema({
    email: { type: String, unique: true, required: true, lowercase: true },
});

// export the user schema 
module.exports = mongoose.model("Email", emailSchema, "emails");
