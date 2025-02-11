const express = require("express");
const courseRouter = express.Router();
const { courseController } = require("../../controllers");
const {
  adminValidator,
  studentValidator,
  instructorValidator,
} = require("../../validators");

courseRouter.get("/", courseController.getCourses);
courseRouter.get("/top-courses", courseController.getTopCourses);
courseRouter.get("/:courseId", courseController.getCourseByCourseId);
courseRouter.post("/", adminValidator, courseController.createCourse);
courseRouter.put("/:courseId", adminValidator, courseController.updateCourse);
courseRouter.post(
  "/:courseId/enroll",
  studentValidator,
  courseController.enrollCourse
);
courseRouter.post(
  "/:courseId/like-unlike",
  studentValidator,
  courseController.likeOrUnlikeCourse
);
courseRouter.post(
  "/:courseId/review",
  studentValidator,
  courseController.reviewCourse
);
courseRouter.post(
  "/:courseId/mark-as-completed",
  studentValidator,
  courseController.markCourseAsCompleted
);
courseRouter.post(
  "/:courseId/add-syllabus",
  instructorValidator,
  courseController.addSyllabusToCourse
);

courseRouter.post(
  "/syllabus/:syllabusId/mark-as-completed",
  studentValidator,
  courseController.markSyllabusAsCompleted
);

courseRouter.get(
  "/:courseId/progress",
  studentValidator,
  courseController.calculateProgress
);

module.exports = courseRouter;
