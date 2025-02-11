const { authService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const ValidationError = require("../errors/validation.error");

const register = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  try {
    if (!name || !email || !password || !role) {
      throw new ValidationError({
        msg: "Name, Email, Password and Role are required",
      });
    }

    const user = await authService.register(name, email, password, role);

    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "User registered successfully",
      data: { user },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new ValidationError({
        msg: "Email and Password are required",
      });
    }

    const { user, token } = await authService.login(email, password);
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "User logged in successfully",
      data: { user, token },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const authController = {
  register,
  login,
};

module.exports = authController;
