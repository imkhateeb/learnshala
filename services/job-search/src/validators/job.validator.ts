import { z } from "zod";
import { JobSource, JobStatus } from "../models/job";

// Common Job Schema
export const jobValidator = z.object({
  title: z.string().min(3, "Title should be at least 3 characters long"),
  description: z
    .string()
    .min(10, "Description should be at least 10 characters"),
  company: z.string().min(2, "Company name is required"),
  location: z.string().min(2, "Location is required"),
  salary: z.string().optional(),
  postedBy: z.string().uuid("Invalid user ID"),
  source: z.nativeEnum(JobSource),
  aiMetadata: z
    .object({
      confidenceScore: z.number().min(0).max(1),
      sourceUrl: z.string().url("Invalid source URL"),
    })
    .optional(),
  status: z.nativeEnum(JobStatus).optional(),
});
