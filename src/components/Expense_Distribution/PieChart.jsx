import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Entertainment", value: 300 },
  { name: "Shopping", value: 300 },
  { name: "Utilites", value: 200 },
];

const COLORS = ["#22c55e", "#3b82f6", "#ef4444", "#f59e0b", "#8b5cf6"];

function MyPieChart() {
  return (
    <div className="flex items-center w-full h-96 p-4  ">
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
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
