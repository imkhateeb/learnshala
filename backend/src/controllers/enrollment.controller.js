const enrollmentService = require("../services/enrollment.service");

const enrollmentController = {};

enrollmentController.isEnrolled = async (req, res, next) => {
  const { courseId } = req.params;
  const { _id: studentId } = req.user;
  try {
    const isEnrolled = await enrollmentService.isEnrolled(courseId, studentId);
    res.status(200).json({
      status: "success",
      msg: "Checking enrollment successfully",
      data: { isEnrolled },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

enrollmentController.getEnrollmentsByStudentId = async (req, res, next) => {
  const { _id: studentId } = req.user;
  try {
    const enrollments = await enrollmentService.getEnrollmentsByStudentId(
      studentId
    );
    res.status(200).json({
      status: "success",
      msg: "Enrollments fetched successfully",
      data: { enrollments },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const calculateProgress = async (req, res, next) => {
  const { courseId } = req.params;
  const { _id: userId } = req.user;
  try {
    const progress = await courseService.calculateProgress(courseId, userId);
    res.status(200).json({
      status: "success",
      msg: "Progress fetched as completed successfully",
      data: { progress },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = enrollmentController;
