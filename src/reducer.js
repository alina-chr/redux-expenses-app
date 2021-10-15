import { ADD_EXPENSE, DELETE_EXPENSE, SET_BUDGET } from "./actions";

export const initialState = {
  //initial state is 0 and empty array, unless we have state.budget and state.expenses in localStorage
  budget: JSON.parse(localStorage.getItem("userBudget")) || 0,
  expenses: JSON.parse(localStorage.getItem("userExpenses")) || [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === ADD_EXPENSE) {
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  }
  if (action.type === DELETE_EXPENSE) {
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.payload
      ),
    };
  }
  if (action.type === SET_BUDGET) {
    return {
      ...state,
      budget: action.payload,
    };
  }
  return state;
};
