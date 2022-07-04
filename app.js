//Allows access to our environmental variables/settings
require("dotenv/config")

//Imports Express and creates our server
const express = require("express");
const app = express();

//Allows us to run our middleware
require("./config/server")(app);

//All routes are handled through here
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

module.exports = app;

