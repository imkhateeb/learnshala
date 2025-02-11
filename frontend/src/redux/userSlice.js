import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./reducers/getUser";
import { getInstructors } from "./reducers/getInstructors";

const initialState = {
  user: null,
  userLoading: false,
  userError: null,

  instructors: [],
  instructorsLoading: false,
  instructorsError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.userLoading = true;
        state.userError = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userLoading = false;
        state.userError = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = action.error.message;
      })
      .addCase(getInstructors.pending, (state, action) => {
        state.instructorsLoading = true;
        state.instructorsError = null;
      })
      .addCase(getInstructors.fulfilled, (state, action) => {
        state.instructors = action.payload;
        state.instructorsLoading = false;
        state.instructorsError = null;
      })
      .addCase(getInstructors.rejected, (state, action) => {
        state.instructorsLoading = false;
        state.instructorsError = action.error.message;
      });
  },
});

export default userSlice.reducer;
