const mongoose = require("mongoose");
const { ENROLLMENT_STATUS } = require("../constants/enums");
const { z } = require("zod");

// Zod Schema for Course Validation
const courseSchema = z.object({
  name: z
    .string()
    .min(3, "Course name must be at least 3 characters.")
    .max(255),
  instructor: z.string().min(1, "Instructor ID is required."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters."),
  enrollmentStatus: z.enum(Object.values(ENROLLMENT_STATUS)).optional(),
  thumbnail: z.string().url("Invalid URL format.").optional(),
  duration: z.number().positive("Duration must be a positive number."),
  courseSchedule: z.string().min(5, "Course schedule is required."),
  suggestions: z.array(z.string()).optional(),
  prerequisites: z.array(z.string()).optional(),
  isActive: z.boolean().optional(),
  syllabus: z.array(z.string()).optional(),
  enrolledStudents: z.array(z.string()).optional(),
  likes: z.array(z.string()).optional(),
  reviews: z.array(z.string()).optional(),
});

module.exports = courseSchema;
