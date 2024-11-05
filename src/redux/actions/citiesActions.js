import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCities = createAsyncThunk('GET_CITIES', async (search = '', { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:8085/api/cities/all?name=${search}`);
      return response.data.response
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
