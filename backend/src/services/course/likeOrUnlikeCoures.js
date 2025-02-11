const { courseRepository } = require("../../repositories");

const likeOrUnlikeCourse = async (courseId, userId) => {
  const { likes } = await courseRepository.getCourseByCourseId(courseId);
  const isLiked = likes.find(
    (like) => like._id.toString() === userId.toString()
  );

  if (isLiked) {
    const updatedDourse = await courseRepository.unlikeACourse(
      courseId,
      userId
    );
    return updatedDourse;
  } else {
    const updatedDourse = await courseRepository.likeACourse(courseId, userId);
    return updatedDourse;
  }
};

module.exports = likeOrUnlikeCourse;
