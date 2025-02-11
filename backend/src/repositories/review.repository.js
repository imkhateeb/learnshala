const { Review } = require("../models");
const reviewRepository = {};

reviewRepository.createReview = async (review) => {
  return await Review.create(review);
};

reviewRepository.getReviewsByCourseId = async (courseId) => {
  return await Review.find({ course: courseId }).populate(
    "user",
    "name email photo"
  );
};

reviewRepository.getReviewByCourseAndStudent = async (courseId, userId) => {
  return await Review.findOne({ course: courseId, user: userId });
};

module.exports = reviewRepository;
