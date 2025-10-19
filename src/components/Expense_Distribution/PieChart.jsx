import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ExpenseContext } from "../../context/ExpenseContext";

// const data = Ex;

const COLORS = ["#22c55e", "#3b82f6", "#ef4444", "#f59e0b", "#8b5cf6"];

function MyPieChart() {
  const { categoryData } = useContext(ExpenseContext);
  return (
    <div className="flex items-center w-full h-96 p-4  ">
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="total"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {categoryData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MyPieChart;
