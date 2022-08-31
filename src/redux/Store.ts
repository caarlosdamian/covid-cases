import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import loginSliceReducer from './loginSlice';
import toggleSliceReducer from './toggleSlice';
import { useApi } from '../hooks/useApi';

const reducers = combineReducers({
  [useApi.reducerPath]: useApi.reducer,
  loginSlice: loginSliceReducer,
  toggleSlice: toggleSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);
