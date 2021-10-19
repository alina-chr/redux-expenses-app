import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenses",
  initialState: JSON.parse(localStorage.getItem("userExpenses")) || [],
  //reducers
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    deleteExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
  },
});
//extract and export each action creator
export const { addExpense, deleteExpense } = expenseSlice.actions;
//extract the reducer
export default expenseSlice.reducer;
