import { configureStore } from '@reduxjs/toolkit';
import loginSliceReducer from './loginSlice';
import toggleSliceReducer from './toggleSlice';
import { useApi } from '../hooks/useApi';

export const store = configureStore({
  reducer: {
    [useApi.reducerPath]: useApi.reducer,
    loginSlice: loginSliceReducer,
    toggleSlice: toggleSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(useApi.middleware),
});
