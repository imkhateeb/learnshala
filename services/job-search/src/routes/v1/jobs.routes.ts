import express from "express";

const jobsRouter = express.Router();

jobsRouter.get("/ping", (_, res) => {
  res.json({ message: "pong" });
});

export default jobsRouter;
