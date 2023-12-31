import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = { counter: 0, showCounter: true}; // Initial state for your reducer

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increase(state, action){
      state.counter = state.counter + action.payload;
    },
    toggeleCounter(state){
      state.showCounter = !state.showCounter;
    }
  }
})


/*const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === 'increase'){
    return{
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === 'toggle'){
    return{
      showCounter: !(state.showCounter),
      counter: state.counter
    }
  }
  return state;
};

const rootReducer = {
  counter: counterReducer,
  // You can add more reducers here if needed
};

const store = configureStore({
  reducer: rootReducer,
  // Other store configuration options if needed
});*/

const store = configureStore({
  reducer: {counter: counterSlice.reducer},
  // Other store configuration options if needed
});

export const counterActions = counterSlice.actions;
export default store;
