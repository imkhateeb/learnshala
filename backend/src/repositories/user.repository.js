const User = require("../models/user.model");

const getAllUsers = async () => {
  const users = await User.find({});
  return users;
};
const getAllInstructors = async () => {
  return await User.find({ role: "instructor" });
};
const getAllStudents = () => {
  return User.find({ role: "student" });
};

const userRepository = {
  getAllUsers,
  getAllInstructors,
  getAllStudents,
};

module.exports = userRepository;
