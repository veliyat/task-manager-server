const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");

const connectDatabase = require("./helpers/database").connect;

const indexRouter = require("./routes/index");
const usersRouter = require("./modules/users/usersRouter");
const tasksRouter = require("./modules/tasks/tasksRouter");

const app = express();

connectDatabase();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);

module.exports = app;
