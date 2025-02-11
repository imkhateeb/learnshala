import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";


export const getInstructors = createAsyncThunk("instructors/getInstructors", async () => {
  const url = `${apiUrl}/users/instructors`;


  try {
    const { data } = await axios.get(url);
    if(data?.status === "success") {
      return data?.data?.instructors;
    }
  } catch (error) {
    return error;
  }
});