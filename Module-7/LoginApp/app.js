const express = require("express");
const app = express();

const AuthController = require("./auth/AuthController");
app.use('/api/auth', AuthController)

module.exports = app;