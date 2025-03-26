// Redux Application (Package)
// File: redux-package/src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; }
  }
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;

const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});

export default store;
