const { courseRepository } = require("../../repositories");

const addSyllabusToCourse = async (courseId, syllabusData) => {
  const course = await courseRepository.getCourseByCourseId(courseId);

  syllabusData.week = (course?.syllabus?.length || 0) + 1;
  syllabusData.course = courseId;

  const updatedCourse = await courseRepository.addSyllabusToCourse(
    courseId,
    syllabusData
  );

  return updatedCourse;
};
module.exports = addSyllabusToCourse;
