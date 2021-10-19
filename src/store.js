import { configureStore } from "@reduxjs/toolkit";
import { budgetSlice } from "./features/expenses/budgetSlice";
import { expenseSlice } from "./features/expenses/expenseSlice";

export const store = configureStore({
  reducer: {
    expenses: expenseSlice.reducer,
    budget: budgetSlice.reducer,
  },
});
