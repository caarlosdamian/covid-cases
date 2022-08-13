/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: false,
  },
  reducers: {
    login: (state: { value: boolean }) => {
      state.value = true;
    },
    logout: (state: { value: boolean }) => {
      state.value = false;
    },
  },
});

const { actions, reducer } = loginSlice;

export const { login, logout } = actions;

export default reducer;
