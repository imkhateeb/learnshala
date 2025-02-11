import { createSlice } from "@reduxjs/toolkit";
import { isEnrolled } from "./reducers/isEnrolled";
import { getEnrolledCourses } from "./reducers/getEnrolledCourses";

const initialState = {
  enrolledCourses: [],
  enrolledLoading: false,
  enrolledError: null,

  isEnrolled: false,
  isEnrolledLoading: false,
  isEnrolledError: null,
};

const enrolledCourseSlice = createSlice({
  name: "enrolledCourses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEnrolledCourses.pending, (state) => {
      state.enrolledLoading = true;
    });
    builder.addCase(getEnrolledCourses.fulfilled, (state, action) => {
      state.enrolledLoading = false;
      state.enrolledCourses = action.payload;
    });
    builder.addCase(getEnrolledCourses.rejected, (state, action) => {
      state.enrolledLoading = false;
      state.enrolledError = action.error.message;
    });

    builder.addCase(isEnrolled.pending, (state) => {
      state.isEnrolledLoading = true;
    });
    builder.addCase(isEnrolled.fulfilled, (state, action) => {
      state.isEnrolledLoading = false;
      state.isEnrolled = action.payload;
    });
    builder.addCase(isEnrolled.rejected, (state, action) => {
      state.isEnrolledLoading = false;
      state.isEnrolledError = action.error.message;
    });
  },
});


export default enrolledCourseSlice.reducer;