import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 3006,
  ATLAS_DB_URL_DEV: process.env.ATLAS_DB_URL_DEV,
  ATLAS_DB_URL_PROD: process.env.ATLAS_DB_URL_PROD,
  NODE_ENV: process.env.NODE_ENV || "development",
  REDIS_PORT: process.env.REDIS_PORT || "6379",
  REDIS_HOST_DEV: process.env.REDIS_HOST_DEV || "127.0.0.1",
  REDIS_HOST_PROD: process.env.REDIS_HOST_PROD || "redis",
};
