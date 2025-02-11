const { User } = require("../models");

const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const findUserById = async (id) => {
  return await User.findById(id);
};
const authRepository = {
  createUser,
  findUserByEmail,
  findUserById,
};

module.exports = authRepository;
