const ServerConfig = require("./server.config");

const redisConfig = {
  port: ServerConfig.REDIS_PORT,
  host:
    ServerConfig.NODE_ENV === "development"
      ? ServerConfig.REDIS_HOST_DEV
      : ServerConfig.REDIS_HOST_PROD,
  retryStrategy: (times) => Math.min(times * 50, 2000), // optional
};

module.exports = redisConfig;
