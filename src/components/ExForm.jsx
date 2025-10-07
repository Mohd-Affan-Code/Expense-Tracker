import React from "react";

function ExForm() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Add New Expense
      </h2>

      <form className="space-y-4">
        {/* Description */}
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
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
            defaultValue="shopping"
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
            defaultValue={new Date().toISOString().split("T")[0]}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExForm;
