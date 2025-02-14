const createCourse = require("./course/createCourse");
const enrollCourse = require("./course/enrollCourse");
const getCourseByCourseId = require("./course/getCourseByCourseId");
const getCourses = require("./course/getCourses");
const likeOrUnlikeCourse = require("./course/likeOrUnlikeCoures");
const markCourseAsCompleted = require("./course/markCourseAsCompleted");
const reviewCourse = require("./course/reviewCourse");
const updateCourse = require("./course/updateCourse");
const getTopCourses = require("./course/getTopCourses");

const courseService = {
  getCourses,
  createCourse,
  updateCourse,
  enrollCourse,
  likeOrUnlikeCourse,
  reviewCourse,
  getCourseByCourseId,
  markCourseAsCompleted,
  getTopCourses,
};

module.exports = courseService;
