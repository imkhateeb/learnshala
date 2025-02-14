const mongoose = require("mongoose");
const { RESOURCES_TYPE_ENUM } = require("../constants/enums");
const Schema = mongoose.Schema;

const syllabusSchema = new Schema({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Course ID is required"],
  },
  week: {
    type: Number,
    required: [true, "Week number is required"],
    min: [1, "Week number must be at least 1"],
  },
  topic: {
    type: String,
    required: [true, "Topic is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  completed: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  resources: {
    type: [
      {
        title: { type: String, required: [true, "Resource title is required"] },
        url: { type: String, required: [true, "Resource URL is required"] },
        type: {
          type: String,
          enum: Object.values(RESOURCES_TYPE_ENUM),
          required: [true, "Resource type is required"],
        },
      },
    ],
    default: [],
  },
  exercises: {
    type: [{ type: Schema.Types.ObjectId, ref: "Problem" }],
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
