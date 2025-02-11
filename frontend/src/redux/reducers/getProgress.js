import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";

export const getProgress = createAsyncThunk(
  "course/getProgress",
  async (courseId) => {
    const url = `${apiUrl}/courses/${courseId}/progress`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });

      if (data?.status === "success") {
        return data?.data?.progress;
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
