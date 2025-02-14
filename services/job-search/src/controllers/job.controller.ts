import { NextFunction, Request, Response } from "express";
import Job, { JobStatus } from "../models/job";
import { jobValidator } from "../validators/job.validator";

export const createJob = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const validatedData = jobValidator.parse(req.body);

    if (validatedData.source === "AI_Scraped") {
      validatedData.status = JobStatus.PENDING;
    }

    const newJob = new Job(validatedData);
    await newJob.save();

    res.status(201).json({ message: "Job created successfully", job: newJob });
  } catch (error) {
    next(error);
  }
};

export const approveJob = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const job = (await Job.findByIdAndUpdate(
      req.params.id,
      { status: JobStatus.APPROVED },
      { new: true }
    )) as typeof Job | null;

    if (!job) {
      res.status(404).json({ error: "Job not found" });
      return;
    }

    res.json({ message: "Job approved", job });
  } catch (error) {
    next(error);
  }
};

export const rejectJob = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const job = (await Job.findByIdAndUpdate(
      req.params.id,
      { status: JobStatus.REJECTED },
      { new: true }
    )) as typeof Job | null;

    if (!job) {
      res.status(404).json({ error: "Job not found" });
      return;
    }

    res.json({ message: "Job rejected", job });
  } catch (error) {
    next(error);
  }
};
