import { configureStore } from '@reduxjs/toolkit';
import loginSliceReducer from './loginSlice';
import { useApi } from '../hooks/useApi';

export const store = configureStore({
  reducer: {
    [useApi.reducerPath]: useApi.reducer,
    loginSlice: loginSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(useApi.middleware),
});
