import { Router } from "express";
import merchandiseRouter from "./merchandise.routes";

const v1Router = Router();

v1Router.get("/ping", (_, res) => {
  res.send("pong");
});

v1Router.use("/merchandise", merchandiseRouter);

export default v1Router;
