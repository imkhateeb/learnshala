const { userRepository } = require("../repositories");

const getAllUsers = async () => {
  const users = await userRepository.getAllUsers();
  return users;
};
const getAllInstructors = async () => {
  const response = await userRepository.getAllInstructors();
  return response;
};
const getAllStudents = async () => {
  return userRepository.getAllStudents();
};

const userService = {
  getAllUsers,
  getAllInstructors,
  getAllStudents,
};

module.exports = userService;
