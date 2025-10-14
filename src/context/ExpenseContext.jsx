import { createContext, useEffect, useReducer, useState } from "react";

export const ExpenseContext = createContext();

const initialState = {};
function expenseReducer(state, action) {}

function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formContent");
    return savedData ? JSON.parse(savedData) : [];
  });

  const deleteExpense = (id) => {
    setFormData((prev) => prev.filter((item, index) => index !== id));
  };

  const updateExpense = (id, updatedData) => {
    setFormData((prev) =>
      prev.map((item, index) =>
        index === id ? { ...item, ...updatedData } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("formContent", JSON.stringify(formData));
  }, [formData]);

  return (
    <ExpenseContext.Provider
      value={{ setFormData, formData, deleteExpense, updateExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
