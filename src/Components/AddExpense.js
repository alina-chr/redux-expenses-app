import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { buttonStyle, defaultColor, inputStyle, importantText } from "./Style";
// /** @jsxImportSource @emotion/react */
// import { jsx, css } from "@emotion/react";
import { addExpense } from "../features/expenses/expenseSlice";

const inputPattern = /^(.+):\s*([0-9]+)$/i;

export default function AddExpense() {
  const dispatch = useDispatch();
  //hold validation message
  const [message, setMessage] = useState("");
  //hold the current state of the input
  const [entry, setEntry] = useState("");
  const changeHandler = (event) => {
    setEntry(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const parts = inputPattern.exec(entry);
    // assume a new try has a valid pattern
    setMessage("");

    // exec always returns null if the pattern is not good
    if (parts === null) {
      setMessage('The format should be: "Expense name: 100"');

      return;
    }
    // if the pattern is good ->  [inputString, captureGroup1, captureGroup2]
    //  destructure:
    let [, name, cost] = parts;
    cost = Number(cost);

    const expense = {
      id: uuidv4(),
      name,
      cost,
    };

    //dispatch the action to the store on submit
    dispatch(addExpense(expense));

    setEntry("");
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="entry" css={defaultColor}>
        Add your expenses using the following pattern:{" "}
        <span css={importantText}>Expense name : cost </span>
      </label>
      <input
        type="text"
        name="entry"
        placeholder="Expense: 100"
        id="entry"
        value={entry}
        required
        onChange={changeHandler}
        css={inputStyle}
      ></input>
      <p>{message.length ? message : null}</p>
      <button type="submit" css={buttonStyle}>
        ADD A NEW EXPENSE
      </button>
    </form>
  );
}
