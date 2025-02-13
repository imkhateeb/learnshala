import express from "express";
import v1Router from "./v1";

const apiRouter = express.Router();

apiRouter.get("/ping", (_, res) => {
  res.json({ message: "pong" });
});

apiRouter.use("/v1", v1Router);

export default apiRouter;
