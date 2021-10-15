import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// /** @jsxImportSource @emotion/react */
// import { jsx, css } from "@emotion/react";
import { setNewBudget } from "../actions";
import { buttonStyle, inputStyle, defaultColor } from "./Style";

export default function Budget() {
  const dispatch = useDispatch();
  //state from redux
  const budgetFromStore = useSelector((state) => state.budget);
  //initial state = the current budget from store
  const [budget, setBudget] = useState(budgetFromStore);
  //calculate total expenses
  const storeExpenses = useSelector((state) => state.expenses);
  const totalExpenses = storeExpenses.reduce((acc, curr) => {
    return acc + curr.cost;
  }, 0);
  //the updated budget which will be displayed
  const displayedBudget = budgetFromStore - totalExpenses;
  // on submit, setNewBudget action is dispatched
  const changeBudget = (event) => {
    event.preventDefault();
    dispatch(setNewBudget(budget));
  };

  //sync Set your budget with Reamining Budget (but not really necessary here):
  // useEffect(() => {
  //   setBudget(displayedBudget);
  // }, [displayedBudget]);

  //keep state.budget in localStorage
  useEffect(() => {
    localStorage.setItem("userBudget", JSON.stringify(budgetFromStore));
  });
  return (
    <div>
      <h1 css={defaultColor}>Track your expenses</h1>
      <h2 css={defaultColor}>Remaining Budget: {displayedBudget}$</h2>
      <form onSubmit={changeBudget}>
        <label htmlFor="budget" css={defaultColor}>
          Your budget is:{" "}
        </label>
        <input
          type="number"
          name="budget"
          placeholder="2000"
          id="budget"
          value={budget}
          css={inputStyle}
          onChange={(event) => setBudget(event.target.value)} //getting the value of the new budget
        ></input>
        <button type="submit" css={buttonStyle}>
          Set budget
        </button>
      </form>
    </div>
  );
}
