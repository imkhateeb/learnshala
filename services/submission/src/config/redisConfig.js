const Redis = require("ioredis");

const ServerConfig = require("./serverConfig");

const redisConfig = {
  port: ServerConfig.REDIS_PORT,
  host:
    ServerConfig.NODE_ENV === "development"
      ? ServerConfig.REDIS_HOST_DEV
      : ServerConfig.REDIS_HOST_PROD,
  maxRetriesPerRequest: null,
};

const redisConnection = new Redis(redisConfig);

module.exports = redisConnection;
