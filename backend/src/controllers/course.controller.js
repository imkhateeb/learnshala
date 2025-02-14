const courseService = require("../services/course.service");

const createCourse = async (req, res, next) => {
  const course = req.body;
  try {
    const newCourse = await courseService.createCourse(course);
    res.status(200).json({
      status: "success",
      msg: "Course created successfully",
      data: { course: newCourse },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const updateCourse = async (req, res, next) => {
  const { courseId } = req.params;
  const course = req.body;
  try {
    const updatedCourse = await courseService.updateCourse(courseId, course);
    res.status(200).json({
      status: "success",
      msg: "Course updated successfully",
      data: { course: updatedCourse },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const getCourses = async (req, res, next) => {
  const filters = req.query;
  const { page, limit } = req.query;
  try {
    const courses = await courseService.getCourses(filters, page, limit);
    res.status(200).json({
      status: "success",
      msg: "Courses fetched successfully",
      data: { courses },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const getCourseByCourseId = async (req, res, next) => {
  const { courseId } = req.params;
  try {
    const course = await courseService.getCourseByCourseId(courseId);
    res.status(200).json({
      status: "success",
      msg: "Course fetched successfully",
      data: { course },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const enrollCourse = async (req, res, next) => {
  const { courseId } = req.params;
  const enrollmentData = req.body;
  const { _id: studentId } = req.user;
  try {
    const course = await courseService.enrollCourse(
      courseId,
      studentId,
      enrollmentData
    );
    res.status(200).json({
      status: "success",
      msg: "Course enrolled successfully",
      data: { course },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const likeOrUnlikeCourse = async (req, res, next) => {
  const { courseId } = req.params;
  const { _id: userId } = req.user;
  try {
    const course = await courseService.likeOrUnlikeCourse(courseId, userId);
    const { likes } = course;
    const isLiked = likes.find(
      (like) => like._id.toString() === userId.toString()
    );
    if (isLiked) {
      res.status(200).json({
        status: "success",
        msg: "Course liked successfully",
        data: { course },
        error: {},
      });
    } else {
      res.status(200).json({
        status: "success",
        msg: "Course unliked successfully",
        data: { course },
        error: {},
      });
    }
  } catch (error) {
    next(error);
  }
};
const reviewCourse = async (req, res, next) => {
  const { courseId } = req.params;
  const reviewData = req.body;
  const { _id: userId } = req.user;
  try {
    const course = await courseService.reviewCourse(
      courseId,
      userId,
      reviewData
    );
    res.status(200).json({
      status: "success",
      msg: "Course reviewed successfully",
      data: { course },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const markCourseAsCompleted = async (req, res, next) => {
  const { courseId } = req.params;
  const { _id: userId } = req.user;
  try {
    const course = await courseService.markCourseAsCompleted(courseId, userId);
    res.status(200).json({
      status: "success",
      msg: "Course marked as completed successfully",
      data: { course },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const getTopCourses = async (req, res, next) => {
  try {
    const topCourses = await courseService.getTopCourses();

    res.status(200).json({
      status: "success",
      msg: "Top courses fetched successfully!",
      data: {
        topCourses,
      },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const courseController = {
  createCourse,
  updateCourse,
  getCourses,
  getCourseByCourseId,
  enrollCourse,
  likeOrUnlikeCourse,
  reviewCourse,
  markCourseAsCompleted,
  getTopCourses,
};
module.exports = courseController;
