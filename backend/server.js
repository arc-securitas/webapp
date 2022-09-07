const mongoose = require("mongoose");
const express = require("express");
const path = require('path');
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "../.env.local" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/agentRoutes"));
app.use(require("./routes/emailRoutes"));
app.use(require("./routes/eventRoutes"));

const dbRoute = process.env.REACT_APP_ATLAS_URI;
const dbName = "web_test";
mongoose
    .connect(dbRoute, { dbName: dbName, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to MongoDB."))
    .catch((err) => console.error("Could not connect to MongoDB: ", err));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));