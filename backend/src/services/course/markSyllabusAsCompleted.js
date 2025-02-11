const NotFoundError = require("../../errors/notfound.error");
const courseRepository = require("../../repositories/course.repository");

const markSyllabusAsCompleted = async (syllabusId, userId) => {
  const syllabus = await courseRepository.markSyllabusAsCompleted(
    syllabusId,
    userId
  );
  if (!syllabus) {
    throw new NotFoundError("Syllabus", syllabusId, {
      msg: "Syllabus not found",
    });
  }
  return syllabus;
};

module.exports = markSyllabusAsCompleted;
