import "./App.css";
import AddExpense from "./Components/AddExpense";
import Budget from "./Components/Budget";
import CreateExpenseList from "./Components/CreateExpenseList";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <Budget />
      <AddExpense />
      <h2
        css={css`
          color: #2b165e;
        `}
      >
        Expense List
      </h2>
      <CreateExpenseList />
    </div>
  );
}

export default App;
