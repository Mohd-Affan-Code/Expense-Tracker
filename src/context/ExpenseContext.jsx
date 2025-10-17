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

  const totals = formData.reduce((acc, item) => {
    const cat = item.category;
    const amt = Number(item.amount); // string ko number me badla
    acc[cat] = (acc[cat] || 0) + amt;
    return acc;
  }, {});

  // 2️⃣ Ab sabse zyada amount wali category nikalte hain
  let maxCategory = null;
  let maxAmount = 0;

  for (const [category, total] of Object.entries(totals)) {
    if (total > maxAmount) {
      maxAmount = total;
      maxCategory = category;
    }
  }

  console.log("Sabse zyada kharch wali category:", maxCategory);

  // Delete Expense
  const deleteExpense = (id) => {
    setFormData((prev) => prev.filter((item, index) => index !== id));
  };

  // Update Expense
  const updateExpense = (id, updatedData) => {
    setFormData((prev) =>
      prev.map((item, index) =>
        index === id ? { ...item, ...updatedData } : item
      )
    );
  };

  // Set localStorage Data
  useEffect(() => {
    localStorage.setItem("formContent", JSON.stringify(formData));
  }, [formData]);

  return (
    <ExpenseContext.Provider
      value={{
        setFormData,
        formData,
        deleteExpense,
        updateExpense,
        maxCategory,
        maxAmount,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
