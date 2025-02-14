const mongoose = require("mongoose");
const {
  USER_ROLES,
  DEGREE_ENUM,
  FIELD_OF_STUDY_ENUM,
  TECH_JOB_ROLES,
  SOCIAL_PLATFORMS,
} = require("../constants/enums");
const { Schema } = mongoose;

// Education Schema
const educationSchema = new Schema({
  institution: { type: String, required: [true, "Institution is required."] },
  degree: {
    type: String,
    enum: Object.values(DEGREE_ENUM),
    required: [true, "Degree is required."],
  },
  fieldOfStudy: {
    type: String,
    enum: Object.values(FIELD_OF_STUDY_ENUM),
    required: [true, "Field of study is required."],
  },
  startDate: { type: Date, required: [true, "Start date is required."] },
  endDate: { type: Date },
  grade: { type: String },
});

// Experience Schema
const experienceSchema = new Schema({
  company: { type: String, required: [true, "Company name is required."] },
  role: {
    type: String,
    enum: Object.values(TECH_JOB_ROLES),
    required: [true, "Role is required."],
  },
  startDate: { type: Date, required: [true, "Start date is required."] },
  endDate: { type: Date },
  description: { type: String },
});

// Social Profile Schema
const socialProfileSchema = new Schema({
  platform: {
    type: String,
    enum: Object.values(SOCIAL_PLATFORMS),
    required: [true, "Platform is required."],
  },
  url: { type: String, required: [true, "URL is required."] },
  username: { type: String },
});

// User Schema
const userSchema = new Schema({
  name: { type: String, required: [true, "Name is required."] },
  email: { type: String, required: [true, "Email is required."], unique: true },
  password: { type: String, required: [true, "Password is required."] },
  role: {
    type: String,
    enum: Object.values(USER_ROLES),
    default: USER_ROLES.STUDENT,
    required: true,
  },
  photo: { type: String, default: null },
  education: [educationSchema],
  experience: [experienceSchema],
  socialProfiles: [socialProfileSchema],
  additionalInfo: { type: Schema.Types.Mixed, default: {} },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Update `updatedAt` field before saving
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("User", userSchema);
