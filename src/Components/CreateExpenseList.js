import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../features/expenses/expenseSlice";
// /** @jsxImportSource @emotion/react */
// import { jsx, css } from "@emotion/react";
import { liStyle } from "./Style";

export default function CreateExpenseList() {
  //state from redux
  const currentExpenses = useSelector((state) => state.expenses);
  //keep state.expenses in localStorage
  useEffect(() => {
    localStorage.setItem("userExpenses", JSON.stringify(currentExpenses));
  });
  //
  const dispatch = useDispatch();

  return (
    <ul>
      {currentExpenses.map((expense) => (
        <li key={expense.id} css={liStyle}>
          {expense.name} {expense.cost}${" "}
          <TiDelete
            size="1.5em"
            onClick={() => dispatch(deleteExpense(expense.id))} //dispatch the action to the store on click
          >
            x
          </TiDelete>
        </li>
      ))}
    </ul>
  );
}
