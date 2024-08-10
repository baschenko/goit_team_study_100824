import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.items.push(payload);
      //   console.log(payload, 'payload');
    },
    delTodo: (state, { payload }) => {
      state.items = state.items.filter(todo => todo.id !== payload);
    },
  },
});

export const { addTodo, delTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
