const { courseRepository } = require("../../repositories");

const getTopCourses = async () => {
  const courses = await courseRepository.getCourses();
  courses?.sort(
    (a, b) =>
      b?.enrolledStudents?.length +
      b?.likes?.length +
      b?.reviews?.length -
      (a?.enrolledStudents?.length + a?.likes?.length + a?.reviews?.length)
  );

  let topCourses = courses?.slice(0, 5);
  return topCourses;
};

module.exports = getTopCourses;
