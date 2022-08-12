/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

export function ReduxTest() {
  const store = configureStore({
    reducer: counterSlice.reducer,
  });

  store.subscribe(() => console.log(store.getState()));

  store.dispatch(incremented());
  store.dispatch(incremented());
  store.dispatch(decremented());
  return <div>Redux Testing</div>;
}
