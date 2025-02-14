import express from "express";
import {
  approveJob,
  createJob,
  rejectJob,
} from "../../controllers/job.controller";

const jobsRouter = express.Router();

jobsRouter.get("/ping", (_, res) => {
  res.json({ message: "pong" });
});

jobsRouter.post("/", createJob);
jobsRouter.patch("/:id/approve", approveJob);
jobsRouter.patch("/:id/reject", rejectJob);

export default jobsRouter;
