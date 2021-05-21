import { configureStore } from '@reduxjs/toolkit';
import homepageReducer from '../Pages/Homepage/homepageSlice';

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
  },
});
