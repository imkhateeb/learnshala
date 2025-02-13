const Redis = require("ioredis");

const ServerConfig = require("./serverConfig");

const redisConfig = {
  port: ServerConfig.REDIS_PORT || 6379,
  host: ServerConfig.REDIS_HOST || "redis",
  maxRetriesPerRequest: null,
};

const redisConnection = new Redis(redisConfig);

module.exports = redisConnection;
