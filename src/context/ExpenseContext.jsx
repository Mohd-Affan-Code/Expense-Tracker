import { createContext } from "react";

export const ExpenseContext = createContext();

const initialState = {};

function ExpenseProvider({ children }) {
  return <ExpenseContext.Provider>{children}</ExpenseContext.Provider>;
}

export default ExpenseProvider;
