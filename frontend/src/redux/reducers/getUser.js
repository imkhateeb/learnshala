import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const userToken = localStorage.getItem("userToken");
  const url = `${apiUrl}/users`;
  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (data?.status === "success") {
      return data?.data?.user;
    }
  } catch (error) {
    console.log(error);
  }
});
