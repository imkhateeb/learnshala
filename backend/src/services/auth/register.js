const bcrypt = require("bcrypt");

const ConflictError = require("../../errors/conflict.error");
const ValidationError = require("../../errors/validation.error");
const { authRepository } = require("../../repositories");

const register = async (name, email, password, role) => {
  const user = await authRepository.findUserByEmail(email);
  if (user) {
    throw new ConflictError("Email", {
      msg: `User with ${email} already exists.`,
    });
  }
  if (role !== "admin" && role !== "student" && role !== "instructor") {
    throw new ValidationError({
      msg: "Role must be either 'admin', 'student', 'instructor'.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userData = { name, email, password: hashedPassword, role };
  const newUser = await authRepository.createUser(userData);
  return newUser;
};

module.exports = register;
