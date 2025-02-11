const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const BadRequest = require("../../errors/badrequest.error");
const NotFoundError = require("../../errors/notfound.error");
const { authRepository } = require("../../repositories");
const { JWT_SECRET_KEY } = require("../../config/server.config");

const login = async (email, password) => {
  const user = await authRepository.findUserByEmail(email);
  if (!user) {
    throw new NotFoundError("User", email, {
      msg: "User with this email does not exist.",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new BadRequest("Password", { msg: "Invalid Password is entered." });
  }
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET_KEY);
  return { user, token };
};

module.exports = login;
