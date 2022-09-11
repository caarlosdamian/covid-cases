/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface ISlice {
  user: {
    token: string;
    isLogged: boolean;
  };
}

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: {
      isLogged: false,
      token: '',
    },
  },
  reducers: {
    login: (state: ISlice, action) => {
      state.user.isLogged = action.payload.data.success;
      state.user.token = action.payload.data.data.token;
    },
  },
});

const { actions, reducer } = loginSlice;

export const { login } = actions;

export default reducer;
