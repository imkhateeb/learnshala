const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/unauthorized.error");
const { JWT_SECRET_KEY } = require("../config/server.config");

const verifyToken = (authHeader) => {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedError({
      msg: "Authorization token missing or malformed",
    });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    return decoded.id;
  } catch (err) {
    throw new UnauthorizedError("Invalid or expired token");
  }
};

module.exports = verifyToken;
