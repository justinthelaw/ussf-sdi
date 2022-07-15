// dependencies
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// route dependencies
const apiUsersRouter = require("./routes/api.users.js");
const apiStoresRouter = require("./routes/api.stores.js");
const apiItemsRouter = require("./routes/api.items.js");
const apiIndexRouter = require("./routes/api.index.js");
const itemsRouter = require("./routes/items.js");
const storesRouter = require("./routes/stores.js");
const usersRouter = require("./routes/users.js");

require("dotenv").config();

const { PORT, HOST_DEV, PROTO_DEV, PROTO_LIVE, HOST_LIVE } = process.env;

const app = express();
const whitelist =
  process.env.NODE_ENV === "development"
    ? `${PROTO_DEV}://${HOST_DEV}:${PORT}`
    : `${PROTO_LIVE}://${HOST_LIVE}`;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: whitelist, credentials: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/api/users", apiUsersRouter);
app.use("/api/stores", apiStoresRouter);
app.use("/api/items", apiItemsRouter);
app.use("/api", apiIndexRouter);
app.use("/items", itemsRouter);
app.use("/stores", storesRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
