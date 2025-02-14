const populateEnrollmentData = (query) => {
  return query.populate({
    path: "course",
    populate: [
      { path: "instructor", select: "name email photo" },
      {
        path: "reviews",
        populate: {
          path: "user",
          select: "name email photo",
        },
      },
      { path: "syllabus" },
      { path: "enrolledStudents", select: "photo" },
      { path: "likes", select: "photo" },
    ],
  });
};

module.exports = populateEnrollmentData;
