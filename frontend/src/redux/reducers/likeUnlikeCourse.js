import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { apiUrl } from "../../config";
import toast from "react-hot-toast";

export const likeUnlikeCourse = createAsyncThunk(
  "courses/likeUnlikeCourse",
  async (courseId) => {
    const userToken = localStorage.getItem("userToken");
    const url = `${apiUrl}/courses/${courseId}/like-unlike`;
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    try {
      const { data } = await axios.post(url, {}, config);
      if (data?.status === "success") {
        toast.success(data?.msg, {
          icon: "🚀",
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return data?.data?.course;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
