import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CiStickyNote } from "react-icons/ci";
import { ExpenseContext } from "../context/ExpenseContext";

function ExHistory() {
  const { formData } = useContext(ExpenseContext);
  console.log(formData);
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 max-h-full  rounded-2xl mt-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Expense History
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Category Select */}
        <select
          id="category"
          name="category"
          defaultValue="All"
          className="w-full md:w-1/3 border border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        >
          <option value="All">All</option>
          <option value="shopping">Shopping</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
        </select>

        {/* Search Input */}
        <input
          type="text"
          name="search-item"
          id="search-item"
          placeholder="Search product..."
          className="w-full md:w-1/3 border border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4">DATE</th>
              <th className="py-3 px-4">DESCRIPTION</th>
              <th className="py-3 px-4">CATEGORY</th>
              <th className="py-3 px-4">AMOUNT</th>
              <th className="py-3 px-4">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((item, index) => (
              <tr
                key={index}
                className="m-0.5 rounded-2xl dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                  {item.date}
                </td>
                <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                  {item.name}
                </td>
                <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                  {item.category}
                </td>
                <td className="py-3 px-4 font-semibold text-green-600 dark:text-green-400">
                  ${item.amount}
                </td>
                <td className="py-3 px-4 flex items-center gap-3">
                  <button className="text-red-500 hover:text-red-700 transition">
                    <MdDelete size={22} />
                  </button>
                  <button className="text-blue-500 hover:text-blue-700 transition">
                    <CiStickyNote size={22} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExHistory;
