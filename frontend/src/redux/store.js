import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./courseSlice";
import userSlice from "./userSlice";
import enrolledCourseSlice from "./enrolledCourseSlice";

const store = configureStore({
  reducer: {
    courses: courseSlice,
    user: userSlice,
    enrollments: enrolledCourseSlice,
  },
});

export default store;
