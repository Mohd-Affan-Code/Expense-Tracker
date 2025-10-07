import React from "react";
import { FaWallet } from "react-icons/fa";
import { PiChartLineDownLight, PiChartLineUpLight } from "react-icons/pi";

function ExTabs() {
  const tabs = [
    {
      icon: <FaWallet className="text-indigo-500 text-3xl" />,
      title: "Total Expenses",
      value: "$3000",
    },
    {
      icon: <PiChartLineUpLight className="text-green-500 text-3xl" />,
      title: "Highest Category",
      value: (
        <>
          Shopping <span className="text-gray-500">($300)</span>
        </>
      ),
    },
    {
      icon: <PiChartLineDownLight className="text-red-500 text-3xl" />,
      title: "Total Entries",
      value: "7",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 hover:shadow-lg transition-all cursor-pointer w-full sm:w-1/3"
        >
          <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl">
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
