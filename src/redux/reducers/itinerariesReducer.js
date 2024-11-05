import { createReducer } from '@reduxjs/toolkit';
import { getItineraries, toggleLike } from '../actions/itinerariesActions';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const itinerariesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getItineraries.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getItineraries.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    })
    .addCase(getItineraries.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    })
    .addCase(toggleLike, (state, action) => {
      const itinerary = state.data.find((item) => item.id === action.payload);
      if (itinerary) {
        itinerary.liked = !itinerary.liked;
      }
    });
});

export default itinerariesReducer;