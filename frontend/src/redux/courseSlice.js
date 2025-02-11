import { createSlice } from "@reduxjs/toolkit";

import { getCourses } from "./reducers/getCourses";
import { likeUnlikeCourse } from "./reducers/likeUnlikeCourse";
import { getProgress } from "./reducers/getProgress";
import { getTopCourses } from "./reducers/getTopCourses";

const initialState = {
  courses: [],
  coursesLoading: false,
  coursesError: null,

  course: null,
  courseLoading: false,
  courseError: null,

  progress: null,
  progressLoading: false,

  topCourses: [],
  topCoursesLoading: false,
  topCoursesError: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCourses.pending, (state) => {
      state.coursesLoading = true;
      state.coursesError = null;
    });
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.coursesLoading = false;
      state.courses = action.payload;
    });
    builder.addCase(getCourses.rejected, (state, action) => {
      state.coursesLoading = false;
      state.coursesError = action.payload;
    });
    builder.addCase(likeUnlikeCourse.fulfilled, (state, action) => {
      state.courses = state.courses?.map((course) =>
        course._id === action.payload._id ? action.payload : course
      );
    });
    builder.addCase(getProgress.pending, (state) => {
      state.progressLoading = true;
    });
    builder.addCase(getProgress.fulfilled, (state, action) => {
      state.progressLoading = false;
      state.progress = action.payload;
    });
    builder.addCase(getTopCourses.pending, (state) => {
      state.topCoursesLoading = true;
      state.topCoursesError = null;
    });
    builder.addCase(getTopCourses.fulfilled, (state, action) => {
      state.topCoursesLoading = false;
      state.topCourses = action.payload;
    });
    builder.addCase(getTopCourses.rejected, (state, action) => {
      state.topCoursesLoading = false;
      state.topCoursesError = action.payload;
    });
  },
});

export default courseSlice.reducer;
