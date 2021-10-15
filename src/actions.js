//action type constants
export const ADD_EXPENSE = "ADD_EXPENSE";
export const DELETE_EXPENSE = "DELETE_EXPENSE";
export const SET_BUDGET = "SET_BUDGET";
//action creators
export const addExpense = (value) => ({ type: ADD_EXPENSE, payload: value });
export const deleteExpense = (value) => ({
  type: DELETE_EXPENSE,
  payload: value,
});
export const setNewBudget = (value) => ({ type: SET_BUDGET, payload: value });
