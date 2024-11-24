import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './reducers/citiesReducer';
import itinerariesReducer from './reducers/itinerariesReducer';
import searchReducer from './reducers/searchReducer';
import authReducer from './reducers/authReducer';
import registerReducer from './reducers/registerReducer';


const store = configureStore({
  reducer: {
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    search: searchReducer,
    auth: authReducer,
    register: registerReducer
  },
});

export default store