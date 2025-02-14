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

module.exports = populateCourseData;
