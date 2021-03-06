import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const style = {
  top: 120,
  left: 400,
  lineHeight: "24px",
};

export default function Chart({ productCount }) {
  return (
    <PieChart width={500} height={400}>
      <Pie
        dataKey="no_of_prod"
        data={productCount}
        cx={200}
        cy={200}
        outerRadius={120}
        fill="#8884d8"
        label
      >
        {data01.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
      <Tooltip />
    </PieChart>
  );
}
