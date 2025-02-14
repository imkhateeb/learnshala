const { z } = require("zod");
const { RESOURCES_TYPE_ENUM } = require("../constants/enums");

const syllabusScema = z.object({
  course: z.string().min(1, "Course ID is required"),
  week: z.number().min(1, "Week number must be at least 1"),
  topic: z.string().min(1, "Topic is required"),
  description: z.string().min(1, "Description is required"),
  completed: z.array(z.string()).optional(),
  resources: z
    .array(
      z.object({
        title: z.string().min(1, "Resource title is required"),
        url: z.string().url("Invalid URL format"),
        type: z.enum(Object.values(RESOURCES_TYPE_ENUM), {
          errorMap: () => ({ message: "Invalid resource type" }),
        }),
      })
    )
    .optional(),
  exercises: z.array(z.string()).optional(),
});

module.exports = syllabusScema;
