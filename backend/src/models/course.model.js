const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  enrollmentStatus: {
    type: String,
    enum: ["Open", "Closed", "In Progress"],
    default: "Open",
  },
  thumbnail: {
    type: String,
    default: null,
  },
  duration: {
    type: Number,
    required: true,
  },
  courseSchedule: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    enum: ["Online", "In-Person"],
    default: "Online",
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
