import React, { useState, lazy, Suspense } from "react";
import { VscPieChart } from "react-icons/vsc";
import { BsBarChartFill } from "react-icons/bs";

const MyPieChart = lazy(() => import("./PieChart"));
const MyLineChart = lazy(() => import("./LIneChart"));

function ExpenseChart() {
  const [activeChart, setActiveChart] = useState("pie"); // default pie chart

  return (
    <div className=" p-5 shadow-lg bg-white dark:bg-gray-800 rounded-2xl transition-colors duration-300">
      <h2 className="text-2xl text-gray-900 dark:text-white font-semibold text-center">
        Expense Analytics
      </h2>

      {/* Buttons */}
      <div className="flex justify-center gap-8 mt-6">
        <button
          onClick={() => setActiveChart("pie")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
            ${
              activeChart === "pie"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
        >
          <VscPieChart className="text-lg" />
          <span>Pie Chart</span>
        </button>

        <button
          onClick={() => setActiveChart("line")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
            ${
              activeChart === "line"
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
        >
          <BsBarChartFill className="text-lg" />
          <span>Line Chart</span>
        </button>
      </div>

      {/* Chart Display with Lazy Loading */}
      <div className="mt-8 min-h-[300px] flex justify-center items-center">
        <Suspense
          fallback={
            <div className="animate-spin text-gray-500 text-lg">
              Loading chart...
            </div>
          }
        >
          {activeChart === "pie" ? <MyPieChart /> : <MyLineChart />}
        </Suspense>
      </div>
    </div>
  );
}

export default ExpenseChart;
