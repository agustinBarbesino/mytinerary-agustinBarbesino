import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const getItineraries = createAsyncThunk(
  'GET_ITINERARIES',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:8085/api/itineraries/city/${id}`);
      return response.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleLike = createAction('TOGGLE_LIKE');