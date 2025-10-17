import React, { useContext } from "react";
import { FaWallet } from "react-icons/fa";
import { PiChartLineDownLight, PiChartLineUpLight } from "react-icons/pi";
import { ExpenseContext } from "../context/ExpenseContext";

function ExTabs() {
  const { formData, maxCategory, maxAmount } = useContext(ExpenseContext);

  const entries = formData.length;

  let capitalized = maxCategory.charAt(0).toUpperCase() + maxCategory.slice(1);

  const totalExpense = formData.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );
  const tabs = [
    {
      icon: <FaWallet className="text-indigo-500 text-3xl" />,
      title: "Total Expenses",
      value: `$${totalExpense}`,
    },
    {
      icon: <PiChartLineUpLight className="text-green-500 text-3xl" />,
      title: "Highest Category",
      value: (
        <>
          {capitalized} <span className="text-gray-500">(${maxAmount})</span>
        </>
      ),
    },
    {
      icon: <PiChartLineDownLight className="text-red-500 text-3xl" />,
      title: "Total Entries",
      value: entries,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 hover:shadow-lg transition-all cursor-pointer w-full sm:w-1/3"
        >
          <div className="p-3 bg-gray-200 dark:bg-gray-700 rounded-xl">
            {tab.icon}
          </div>
          <div>
            <p className="text-gray-500 text-sm">{tab.title}</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {tab.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExTabs;
