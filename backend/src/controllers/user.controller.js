const InternalServerError = require("../errors/internalservererror.error");
const { userService } = require("../services");

const getUser = async (req, res, next) => {
  try {
    const user = req.user;
    res.status(200).json({
      status: "success",
      msg: "User fetched successfully",
      data: { user },
      error: null,
    });
  } catch (error) {
    new InternalServerError({ msg: error.message });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const response = await userService.getAllUsers();
    res.status(200).json({
      status: "success",
      msg: "Users fetched successfully",
      data: { users: response },
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

const getAllInstructors = async (req, res, next) => {
  try {
    const response = await userService.getAllInstructors();
    res.status(200).json({
      status: "success",
      msg: "Instructors fetched successfully",
      data: { instructors: response },
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

const getAllStudents = async (req, res, next) => {
  try {
    const response = await userService.getAllStudents();
    res.status(200).json({
      status: "success",
      msg: "Students fetched successfully",
      data: { students: response },
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

const userController = {
  getUser,
  getAllUsers,
  getAllInstructors,
  getAllStudents,
};

module.exports = userController;
