import Redis from "ioredis";

import ServerConfig from "./serverConfig";

const redisConfig = {
  port: Number(ServerConfig.REDIS_PORT),
  host:
    ServerConfig.NODE_ENV === "development"
      ? ServerConfig.REDIS_HOST_DEV
      : ServerConfig.REDIS_HOST_PROD,
  maxRetriesPerRequest: null,
};

const redisConnection = new Redis(redisConfig);

export default redisConnection;
