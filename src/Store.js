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
// Sync Redux state across tabs using BroadcastChannel
const channel = new BroadcastChannel('redux-sync');

// Send updated state to all tabs
store.subscribe(() => {
  channel.postMessage(store.getState());
});

// Receive updates in all tabs
channel.onmessage = (event) => {
  const newState = event.data;
  store.dispatch({ type: 'GLOBAL_STATE_UPDATE', payload: newState });
};
export default store;
