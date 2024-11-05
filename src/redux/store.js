import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './reducers/citiesReducer';
import itinerariesReducer from './reducers/itinerariesReducer';
import searchReducer from './reducers/searchReducer';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    search: searchReducer
  },
});

export default store