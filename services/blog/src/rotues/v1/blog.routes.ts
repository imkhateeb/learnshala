import { Router } from "express";

const blogRouter = Router();

blogRouter.get("/ping", (_, res) => {
  res.send("pong");
});

export default blogRouter;
