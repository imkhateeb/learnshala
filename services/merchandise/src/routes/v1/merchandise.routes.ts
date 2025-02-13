import { Router } from "express";

const merchandiseRouter = Router();

merchandiseRouter.get("/ping", (_, res) => {
  res.send("pong");
});

export default merchandiseRouter;
