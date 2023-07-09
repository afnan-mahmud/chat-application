// External imports
const express = require("express");

// Internal Imports
const { getInbox } = require("../controller/inboxController");
const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

// login page
router.get("/", checkLogin, getInbox);

module.exports = router;
