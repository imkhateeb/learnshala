const syllabusService = require("../services/syllabus.service");

const markSyllabusAsCompleted = async (req, res, next) => {
  const { syllabusId } = req.params;
  const { _id: userId } = req.user;
  try {
    const syllabus = await syllabusService.markSyllabusAsCompleted(
      syllabusId,
      userId
    );
    res.status(200).json({
      status: "success",
      msg: "Syllabus marked as completed successfully",
      data: { syllabus },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const addSyllabusToCourse = async (req, res, next) => {
  const { courseId } = req.params;
  const syllabusData = req.body;
  const { _id: instructorId } = req.user;
  try {
    const course = await syllabusService.addSyllabusToCourse(
      courseId,
      syllabusData
    );
    res.status(200).json({
      status: "success",
      msg: "Syllabus added to course successfully",
      data: { course },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const syllabusController = {
  markSyllabusAsCompleted,
  addSyllabusToCourse,
};

module.exports = syllabusController;
