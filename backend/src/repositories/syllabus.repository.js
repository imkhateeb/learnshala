const { Syllabus, Course } = require("../models");
const populateCourseData = require("../utils/populateData/populateCourseData");

const addSyllabusToCourse = async (courseId, syllabusData) => {
  const syllabus = await Syllabus.create(syllabusData);
  const course = await Course.findOne({ _id: courseId });
  course.syllabus.push(syllabus._id);
  await course.save();
  const updatedCourse = await populateCourseData(Course.findById(courseId));
  return updatedCourse;
};

const markSyllabusAsCompleted = async (syllabusId, userId) => {
  const syllabus = await Syllabus.findById(syllabusId);
  syllabus.completed.push(userId);
  await syllabus.save();
  return syllabus;
};

const getSyllabusOfACourse = async (courseId) => {
  const syllabus = await Syllabus.find({ course: courseId });

  return syllabus;
};

module.exports = {
  addSyllabusToCourse,
  markSyllabusAsCompleted,
  getSyllabusOfACourse,
};
