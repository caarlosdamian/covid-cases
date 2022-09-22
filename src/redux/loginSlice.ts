/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface ISlice {
  token: string;
  isLogged: boolean;
}

const initialState: ISlice = {
  isLogged: false,
  token: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state: ISlice, action) => ({
      isLogged: true,
      token: action.payload.data.data.token,
    }),
  },
});

const { actions, reducer } = loginSlice;

export const { login } = actions;

export default reducer;
