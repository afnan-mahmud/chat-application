// External imports
const express = require("express");

// Internal Imports
const { getInbox } = require("../controller/inboxController");

const router = express.Router();

// login page
router.get("/", getInbox);

module.exports = router;
