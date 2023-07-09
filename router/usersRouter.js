// External imports
const express = require("express");
const { check } = require("express-validator");

// Internal Imports
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidator,
  addUserValidationHandler,
} = require("../middlewares/users/userValidator");
const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

// users page
router.get("/", checkLogin, getUsers);

// add user
router.post(
  "/",
  checkLogin,
  avatarUpload,
  addUserValidator,
  addUserValidationHandler,
  addUser
);

router.delete("/:id", removeUser);

module.exports = router;
