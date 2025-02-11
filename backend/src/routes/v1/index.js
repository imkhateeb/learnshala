const express = require("express");

const v1Router = express.Router();

const authRouter = require("./auth.route");
const courseRouter = require("./course.route");
const userRouter = require("./user.route");
const enrollmentRouter = require("./enrollment.route");

v1Router.use("/auth", authRouter);
v1Router.use("/courses", courseRouter);
v1Router.use("/users", userRouter);
v1Router.use("/enrollments", enrollmentRouter);

module.exports = v1Router;
