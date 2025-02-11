import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";

export const getTopCourses = createAsyncThunk(
  "courses/topCourses",
  async () => {
    const url = `${apiUrl}/courses/top-courses`;
    try {
      const { data } = await axios.get(url);
      return data?.data?.topCourses;
    } catch (error) {
      console.log(error);
    }
  }
);
