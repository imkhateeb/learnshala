const express = require("express");

const authRouter = express.Router();

const { authController } = require("../../controllers");
const { StatusCodes } = require("http-status-codes");

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/check", (req, res) => {
  res.status(StatusCodes.OK).json({
    status: "success",
    msg: "Your Auth route is working fine",
    data: {},
    error: {},
  });
});

module.exports = authRouter;
