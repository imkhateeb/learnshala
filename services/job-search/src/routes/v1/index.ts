import express from "express";
import jobsRouter from "./jobs.routes";

const v1Router = express.Router();

v1Router.get("/ping", (_, res) => {
  res.json({ message: "pong" });
});

v1Router.use("/jobs", jobsRouter);

export default v1Router;
