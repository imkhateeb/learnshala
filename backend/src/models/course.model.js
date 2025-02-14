const mongoose = require("mongoose");
const { ENROLLMENT_STATUS } = require("../constants/enums");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: [true, "Course name is required."],
    trim: true,
    unique: true,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Instructor is required."],
  },
  description: {
    type: String,
    required: [true, "Description is required."],
    trim: true,
  },
  enrollmentStatus: {
    type: String,
    enum: Object.values(ENROLLMENT_STATUS),
    default: "Open",
  },
  thumbnail: {
    type: String,
    default: null,
  },
  duration: {
    type: Number,
    required: [true, "Duration is required."],
  },
  courseSchedule: {
    type: String,
    required: [true, "Course schedule is required."],
  },
  suggestions: {
    type: [String],
    default: [],
  },
  prerequisites: {
    type: [String],
    default: [],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  syllabus: [
    {
      type: Schema.Types.ObjectId,
      ref: "Syllabus",
    },
  ],
  enrolledStudents: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

courseSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Course", courseSchema);
