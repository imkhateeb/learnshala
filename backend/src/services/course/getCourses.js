const { courseRepository } = require("../../repositories");

const getCourses = async (filters, page = 1, limit = 100) => {
  delete filters.page;
  delete filters.limit;
  const totalCourses = await courseRepository.getCourses();
  const totalPages = Math.ceil(totalCourses.length / limit);
  const courses = await courseRepository.getCourses(filters, page, limit);
  return { courses, totalPages, totalCourses: totalCourses.length };
};

module.exports = getCourses;
