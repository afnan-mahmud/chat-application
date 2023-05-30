// External imports
const express = require("express");

// Internal Imports
const { getLogin } = require("../controller/loginController");

const router = express.Router();

// login page
router.get("/", getLogin);

module.exports = router;
