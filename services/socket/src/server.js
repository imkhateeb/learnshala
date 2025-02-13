const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const Redis = require("ioredis");
const cors = require("cors");

const app = express();
app.use(express.json());
const httpServer = createServer(app);
const redisCache = new Redis({
  host: "redis",
  port: 6379,
  retryStrategy: (times) => Math.min(times * 50, 2000), // optional
});

const corsOptions = {
  origin: ["http://localhost:3003", "http://127.0.0.1:3003"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3003", "http://127.0.0.1:3003"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);

  socket.on("setUserId", async (userId) => {
    try {
      console.log("Associating user id with connection id:", userId, socket.id);
      await redisCache.set(userId, socket.id);
    } catch (error) {
      console.error("Error setting user ID in Redis:", error);
    }
  });

  socket.on("getConnectionId", async (userId) => {
    try {
      const connId = await redisCache.get(userId);
      console.log("Retrieved connection id for user id:", userId, connId);
      socket.emit("connectionId", connId);
    } catch (error) {
      console.error("Error retrieving connection ID from Redis:", error);
    }
  });
});

app.get("/api/v1/ping", (req, res) => {
  res.send("pong");
});

app.post("/sendPayload", async (req, res) => {
  const { userId, payload } = req.body;
  if (!userId || !payload) {
    return res
      .status(400)
      .send("Invalid request: userId and payload are required");
  }

  try {
    const socketId = await redisCache.get(userId);
    if (socketId) {
      io.to(socketId).emit("submissionPayloadResponse", payload);
      res.send("Payload sent successfully");
    } else {
      res.status(404).send("User not connected");
    }
  } catch (error) {
    console.error("Error sending payload:", error);
    res.status(500).send("Internal server error");
  }
});

PORT = process.env.PORT || 3002;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
