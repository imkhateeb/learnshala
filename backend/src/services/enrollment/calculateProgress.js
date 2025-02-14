const { courseRepository } = require("../../repositories");

const calculateProgress = async (courseId, userId) => {
  const syllabus = await courseRepository.getSyllabusOfACourse(courseId);

  const totalSyllabus = syllabus.length;
  let completedSyllabus = 0;

  syllabus.forEach((s) => {
    if (s.completed.includes(userId)) {
      completedSyllabus++;
    }
  });

  return (completedSyllabus / totalSyllabus) * 100;
};


module.exports = calculateProgress;