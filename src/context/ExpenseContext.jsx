import { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext();

function ExpenseProvider({ children }) {
  // ✅ Default Expenses (ye pehle se show honge)
  const defaultExpenses = [
    { name: "Groceries", amount: 1500, category: "Food", date: "2025-10-01" },
    {
      name: "Electricity Bill",
      amount: 1200,
      category: "Utilities",
      date: "2025-10-05",
    },
    {
      name: "Club Membership",
      amount: 800,
      category: "Entertainment",
      date: "2025-10-10",
    },
  ];

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formContent");
    // if (savedData == []) {
    //   !savedData;
    // }
    // Agar data pehli baar load ho raha hai to defaultExpenses set kar do
    return savedData ? JSON.parse(savedData) : defaultExpenses;
  });

  // Totals calculate karna
  const totals = formData.reduce((acc, item) => {
    const cat = item.category;
    const amt = Number(item.amount);
    acc[cat] = (acc[cat] || 0) + amt;
    return acc;
  }, {});

  const categoryData = Object.entries(totals).map(([category, total]) => ({
    category,
    total,
  }));

  // Sabse zyada kharch wali category
  let maxCategory = null;
  let maxAmount = 0;

  for (const [category, total] of Object.entries(totals)) {
    if (total > maxAmount) {
      maxAmount = total;
      maxCategory = category;
    }
  }

  // Delete Expense
  const deleteExpense = (id) => {
    setFormData((prev) => prev.filter((_, index) => index !== id));
  };

  // LocalStorage Sync
  useEffect(() => {
    localStorage.setItem("formContent", JSON.stringify(formData));
  }, [formData]);

  return (
    <ExpenseContext.Provider
      value={{
        setFormData,
        formData,
        deleteExpense,
        maxCategory,
        maxAmount,
        categoryData,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
