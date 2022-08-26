const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "../.env.local" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/agentRoutes"));
app.use(require("./routes/emailRoutes"));

const dbRoute = process.env.REACT_APP_ATLAS_URI;
const dbName = "web_test";
mongoose
    .connect(dbRoute, { dbName: dbName, useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => console.log("Successfully connected to MongoDB."))
    .catch((err) => console.error("Could not connect to MongoDB: ", err));

app.listen(port, () => console.log(`Server is running on port: ${port}`));