import { Router } from "express";
import blogRouter from "./blog.routes";

const v1Router = Router();

v1Router.get("/ping", (_, res) => {
  res.send("pong");
});

v1Router.use("/blogs", blogRouter);

export default v1Router;
