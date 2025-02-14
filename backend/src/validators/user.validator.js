const { z } = require("zod");
const {
  USER_ROLES,
  DEGREE_ENUM,
  FIELD_OF_STUDY_ENUM,
  TECH_JOB_ROLES,
  SOCIAL_PLATFORMS,
} = require("../constants/enums");

// Education Validation Schema
const educationSchema = z.object({
  institution: z
    .string()
    .min(3, "Institution name must be at least 3 characters."),
  degree: z.enum(Object.values(DEGREE_ENUM), "Invalid degree type."),
  fieldOfStudy: z.enum(
    Object.values(FIELD_OF_STUDY_ENUM),
    "Invalid field of study."
  ),
  startDate: z.coerce.date({ required_error: "Start date is required." }),
  endDate: z.coerce.date().optional(),
  grade: z.string().optional(),
});

// Experience Validation Schema
const experienceSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters."),
  role: z.enum(Object.values(TECH_JOB_ROLES), "Invalid job role."),
  startDate: z.coerce.date({ required_error: "Start date is required." }),
  endDate: z.coerce.date().optional(),
  description: z.string().optional(),
});

// Social Profile Validation Schema
const socialProfileSchema = z.object({
  platform: z.enum(Object.values(SOCIAL_PLATFORMS), "Invalid social platform."),
  url: z.string().url("Invalid URL format."),
  username: z.string().optional(),
});

// User Validation Schema
const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  role: z.enum(Object.values(USER_ROLES), "Invalid user role."),
  photo: z.string().url().optional(),
  education: z.array(educationSchema).optional(),
  experience: z.array(experienceSchema).optional(),
  socialProfiles: z.array(socialProfileSchema).optional(),
  additionalInfo: z.record(z.any()).optional(),
});

module.exports = userSchema;
