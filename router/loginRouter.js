// External imports
const express = require("express");
const router = express.Router();

// Internal Imports
const { getLogin, login, logout } = require("../controller/loginController");
const {
  loginValidators,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");
const {
  decorateHtmlResponse,
} = require("../middlewares/common/decorateHtmlResponse");
const { redirectLoggedIn } = require("../middlewares/common/checkLogin");

// variable
const page_title = "Login";

// login page
router.get("/", redirectLoggedIn, getLogin);

// process login
router.post(
  "/",
  decorateHtmlResponse(page_title),
  loginValidators,
  doLoginValidationHandler,
  login
);

router.delete("/", logout);

module.exports = router;
