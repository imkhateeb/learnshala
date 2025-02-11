const login = require("./auth/login");
const register = require("./auth/register");

const authService = {
  register,
  login,
};

module.exports = authService;
