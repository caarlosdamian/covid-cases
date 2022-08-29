/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

const { actions, reducer } = toggleSlice;

export const { toggle } = actions;

export default reducer;
