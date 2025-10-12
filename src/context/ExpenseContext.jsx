import { createContext, useState } from "react";

export const ExpenseContext = createContext();

const initialState = {};

function ExpenseProvider({ children }) {
  const [formData, setFormData] = useState([]);
  console.log(formData);
  let name = "affan";
  return (
    <ExpenseContext.Provider value={{ setFormData, formData }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
