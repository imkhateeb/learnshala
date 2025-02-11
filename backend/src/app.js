const express = require("express");
const app = express();
const cors = require("cors");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
const rateLimiter = require("express-rate-limit");

const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    status: "error",
    msg: "Too many requests from this IP, please try again after 15 minutes",
    data: {},
    error: {
      msg: "Too many requests from this IP, please try again after 15 minutes",
    },
  },
});

app.use(cors());

// Parsing Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routes
app.use("/api", limiter, apiRouter);
app.get("/check", (req, res) => {
  return res.send("Hello World");
});
// Unwanted routes
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    msg: "Route not found",
    data: {},
    error: {
      msg: "Route not found",
    },
  });
});

// Registering Global Error Handler
app.use(errorHandler);

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectToDB();
  // await runTest();
});
