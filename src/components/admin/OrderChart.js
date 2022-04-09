import React, { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function OrderChart({ ordersCount }) {
  return (
    <AreaChart
      width={500}
      height={340}
      data={ordersCount}
      margin={{
        top: 100,
        right: 40,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="ProductCategory" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="orders" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}
