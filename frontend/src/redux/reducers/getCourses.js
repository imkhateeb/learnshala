import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";

export const getCourses = createAsyncThunk("courses/getCourses", async () => {
  const url = `${apiUrl}/courses`;
  try {
    const { data } = await axios.get(url);
    return data?.data?.courses?.courses;
  } catch (error) {
    console.log(error);
  }
});
