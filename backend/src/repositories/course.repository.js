const Course = require("../models/course.model");
const Enrollment = require("../models/enrollment.model");
const Syllabus = require("../models/syllabus.model");
const Review = require("../models/review.model");

// Helper function to populate course data
const populateCourseData = (query) => {
  return query
    .populate("instructor", "name email photo")
    .populate({
      path: "reviews",
      populate: {
        path: "user",
        select: "name email photo",
      },
    })
    .populate("syllabus")
    .populate("enrolledStudents", "photo")
    .populate("likes", "photo");
};

const getCourses = async (filters, page = 1, limit = 10) => {
  const response = await populateCourseData(
    Course.find(filters)
      .skip((page - 1) * limit)
      .limit(limit)
  );
  return response;
};

const getCourseByCourseId = async (courseId) => {
  const response = await populateCourseData(Course.findOne({ _id: courseId }));
  return response;
};

const createCourse = async (course) => {
  const response = await Course.create(course);
  return await populateCourseData(Course.findById(response._id));
};

const updateCourse = async (courseId, courseData) => {
  const course = await Course.findOne({ _id: courseId });
  course.set(courseData);
  await course.save();
  return await populateCourseData(Course.findById(courseId));
};

const deleteCourse = async (courseId) => {
  const response = await Course.deleteOne({ _id: courseId });
  await Syllabus.deleteMany({ course: courseId });
  await Enrollment.deleteMany({ course: courseId });
  await Review.deleteMany({ course: courseId });
  return response;
};

const likeACourse = async (courseId, userId) => {
  const course = await Course.findOne({ _id: courseId });
  course.likes.push(userId);
  await course.save();
  return await populateCourseData(Course.findById(courseId));
};

const unlikeACourse = async (courseId, userId) => {
  const course = await Course.findOne({ _id: courseId });
  course.likes = course.likes.filter(
    (like) => like._id.toString() !== userId.toString()
  );
  await course.save();
  return await populateCourseData(Course.findById(courseId));
};

const enrollCourse = async (courseId, studentId, enrollmentData) => {
  const course = await Course.findOne({ _id: courseId });
  course.enrolledStudents.push(studentId);
  await course.save();
  await Enrollment.create(enrollmentData);
  return await populateCourseData(Course.findById(courseId));
};

const reviewCourse = async (courseId, reviewData) => {
  const review = await Review.create(reviewData);
  const course = await Course.findOne({ _id: courseId });
  course.reviews.push(review._id);
  await course.save();
  return await populateCourseData(Course.findById(courseId));
};

const markCourseAsCompleted = async (enrollmentId) => {
  const enrollment = await Enrollment.findById(enrollmentId);
  enrollment.completed = true;
  enrollment.progress = 100;
  await enrollment.save();
  return enrollment;
};

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

const courseRepository = {
  getCourses,
  getCourseByCourseId,
  createCourse,
  updateCourse,
  deleteCourse,
  likeACourse,
  unlikeACourse,
  enrollCourse,
  reviewCourse,
  markCourseAsCompleted,
  addSyllabusToCourse,
  markSyllabusAsCompleted,
  getSyllabusOfACourse,
};

module.exports = courseRepository;
