const { courseRepository } = require("../../repositories");

const reviewCourse = async (courseId, userId, reviewData) => {
  reviewData.course = courseId;
  reviewData.user = userId;
  const course = await courseRepository.reviewCourse(courseId, reviewData);
  return course;
};

module.exports = reviewCourse;
