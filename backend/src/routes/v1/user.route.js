const { userController } = require("../../controllers");
const { userValidator } = require("../../validators");

const userRouter = require("express").Router();

userRouter.get("/", userValidator, userController.getUser);
userRouter.get("/users", userController.getAllUsers);
userRouter.get("/instructors", userController.getAllInstructors);
userRouter.get("/students", userController.getAllStudents);

module.exports = userRouter;
