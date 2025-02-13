const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3001,
  ATLAS_DB_URL_DEV: process.env.ATLAS_DB_URL_DEV,
  ATLAS_DB_URL_PROD: process.env.ATLAS_DB_URL_PROD,
  LOG_DB_URL: process.env.LOG_DB_URL,
  NODE_ENV: process.env.NODE_ENV || "development",
};
