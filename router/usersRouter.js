// External imports
const express = require("express");

// Internal Imports
const { getUsers } = require("../controller/usersController");

const router = express.Router();

// login page
router.get("/", getUsers);

module.exports = router;
