//This allows access to environment variables/settings
require("dotenv/config")

//TODO: Add the mongoAtlas.configuration

const express = require("express");

const app = express();

console.log("Everything looks good!")

module.exports = app;

