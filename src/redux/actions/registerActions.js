import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk("REGISTER", async (userData) => {
    let user = {
      name: userData.name,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      img: userData.img,
      country: userData.country
    }

    try {
      const response = await axios.post("http://localhost:8085/api/users/signUp", user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Error registering user.");
    }
  }
)