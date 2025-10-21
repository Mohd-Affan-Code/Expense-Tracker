import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function ExForm() {
  const { setFormData } = useContext(ExpenseContext);
  const [inputData, setInputData] = useState({
    name: "",
    amount: "",
    category: "shopping",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputData({
      name: "",
      amount: "",
      category: "shopping",
      date: new Date().toISOString().split("T")[0],
    });
    setFormData((prev) => [...prev, inputData]);
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <div className="max-w-md   bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 ">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Add New Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Description */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Description
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={inputData.name}
            onChange={handleChange}
            required
            placeholder="Enter expense description"
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col">
          <label
            htmlFor="amount"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            required
            value={inputData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={inputData.category}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          >
            <option value="shopping">Shopping</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label
            htmlFor="date"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={inputData.date}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200 cursor-pointer"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExForm;
