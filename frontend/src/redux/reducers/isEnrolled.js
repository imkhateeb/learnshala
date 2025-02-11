import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";

export const isEnrolled = createAsyncThunk(
  "enrolledCourses/isEnrolled",
  async (courseId) => {
    const url = `${apiUrl}/enrollments/is-enrolled/${courseId}`;
    const userToken = localStorage.getItem("userToken");

    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (data?.status === "success") {
        return data?.data?.isEnrolled;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
