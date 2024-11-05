import { createReducer } from '@reduxjs/toolkit';
import { getCities } from '../actions/citiesActions';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCities.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(getCities.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload
    })
    .addCase(getCities.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    });
});

export default citiesReducer;
