//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

const alertSchema = new Schema({
    // agent id
    agent: { type: Schema.Types.ObjectId, required: true },

    // event id
    event: { type: Schema.Types.ObjectId, required: true },

    dateTime: { type: Date, required: true },

    // alert audio
    // audio: ???    ---> GridFS????
    audioTranscription: String
});

// export the user schema 
module.exports = mongoose.model("Alert", alertSchema, 'alerts');
