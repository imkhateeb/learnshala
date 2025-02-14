import mongoose, { Schema, Document } from "mongoose";

export enum JobStatus {
  PENDING = "Pending",
  APPROVED = "Approved",
  REJECTED = "Rejected",
}

export enum JobSource {
  MANUAL = "Manual",
  AI_SCRAPED = "AI_Scraped",
}

export interface IJob extends Document {
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: string;
  postedBy: mongoose.Schema.Types.ObjectId; // User ID from Auth Service
  source: JobSource;
  aiMetadata?: {
    confidenceScore: number;
    sourceUrl: string;
  };
  status: JobStatus;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String, default: null },
    postedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    source: {
      type: String,
      enum: Object.values(JobSource),
      required: true,
    },
    aiMetadata: {
      confidenceScore: { type: Number, min: 0, max: 1 },
      sourceUrl: { type: String, trim: true },
    },
    status: {
      type: String,
      enum: Object.values(JobStatus),
      default: JobStatus.PENDING,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IJob>("Job", JobSchema);
