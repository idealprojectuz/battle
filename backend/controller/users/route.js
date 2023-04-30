const express = require("express");
const Controller = require("./index");
const router = express.Router();

router.post("/login", Controller.Login);

module.exports = router;
