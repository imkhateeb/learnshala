const { enrollmentController } = require('../../controllers');
const { studentValidator } = require('../../validators');

const enrollmentRouter = require('express').Router();

enrollmentRouter.get('/is-enrolled/:courseId', studentValidator, enrollmentController.isEnrolled);
enrollmentRouter.get('/', studentValidator, enrollmentController.getEnrollmentsByStudentId);

module.exports = enrollmentRouter;