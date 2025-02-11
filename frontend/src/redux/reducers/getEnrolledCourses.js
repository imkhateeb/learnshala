import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";

export const getEnrolledCourses = createAsyncThunk(
  "enrolledCourses/getEnrolledCourses",
  async () => {
    const url = `${apiUrl}/enrollments`;
    const userToken = localStorage.getItem("userToken");

    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (data?.status === "success") {
        return data?.data?.enrollments;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
