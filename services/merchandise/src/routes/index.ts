import { Router } from "express";
import v1Router from "./v1";

const apiRouter = Router();

apiRouter.get("/ping", (_, res) => {
  res.send("pong");
});

apiRouter.use("/v1", v1Router);

export default apiRouter;
