//Allows access to our environmental variables/settings
require("dotenv/config")
require("./config/mongoAtlas.config");

//Imports Express and creates our server
const express = require("express");
const app = express();

//Allows us to run our middleware
require("./config/server.config")(app);

//All routes are handled through here
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

module.exports = app;

