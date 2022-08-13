import { configureStore } from '@reduxjs/toolkit';
import loginSliceReducer from './loginSlice';

export const store = configureStore({
  reducer: { loginSlice: loginSliceReducer },
});
