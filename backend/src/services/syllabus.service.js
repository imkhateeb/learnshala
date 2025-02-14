const addSyllabusToCourse = require("./syllabus/addSyllabusToCourse");
const markSyllabusAsCompleted = require("./syllabus/markSyllabusAsCompleted");

const syllabusService = {
  addSyllabusToCourse,
  markSyllabusAsCompleted,
};

module.exports = syllabusService;
