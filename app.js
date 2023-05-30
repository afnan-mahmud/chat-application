// External Imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// Internal Imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");
const {
  decorateHtmlResponse,
} = require("./middlewares/common/decorateHtmlResponse");

// initialize application
const app = express();
dotenv.config();

// Database Connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log(err));

// Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view Engine
app.set("view engine", "ejs");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing setup
app.use("/", decorateHtmlResponse("Login"), loginRouter);
app.use("/users", decorateHtmlResponse("User"), usersRouter);
app.use("/inbox", decorateHtmlResponse("Inbox"), inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// Common Error Handler
app.use(errorHandler);

// Listener
app.listen(process.env.PORT, () => {
  console.log(`Listening from ${process.env.PORT}`);
});
