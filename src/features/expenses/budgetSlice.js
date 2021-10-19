import { createSlice } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
  name: "budget",
  initialState: JSON.parse(localStorage.getItem("userBudget")) || 0,
  //reducers
  reducers: {
    setNewBudget: (state, action) => action.payload,
  },
});

export const { setNewBudget } = budgetSlice.actions;

export default budgetSlice.reducer;
