const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const syllabusSchema = new Schema({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  week: {
    type: Number,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  resources: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

syllabusSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Syllabus", syllabusSchema);
