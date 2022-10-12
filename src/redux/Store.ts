import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import loginSliceReducer from './loginSlice';
import toggleSliceReducer from './toggleSlice';
import { useApi } from '../hooks/useApi';
import { authApi } from './api';
import { covidMex } from './apiCovidMx/apiCovidMx';

const reducers = combineReducers({
  [useApi.reducerPath]: useApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [covidMex.reducerPath]: covidMex.reducer,
  login: loginSliceReducer,
  toggle: toggleSliceReducer,
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
