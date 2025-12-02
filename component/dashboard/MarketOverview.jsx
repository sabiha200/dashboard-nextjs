"use client";

import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", value: 25 },
  { name: "Tue", value: 40 },
  { name: "Wed", value: 35 },
  { name: "Thu", value: 20 },
  { name: "Fri", value: 55 },
  { name: "Sat", value: 70 },
  { name: "Sun", value: 35 },
];

// Background bars (always full height)
const backgroundData = data.map(() => ({ height: 100 }));

export default function MarketOverviewChart() {
  return (
    <div className="w-full h-[420px] bg-white rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Market Overview</h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          barSize={32}
          barGap={-32}   // force overlap exactly
          barCategoryGap="25%"
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={({ x, y, payload }) => {
              const isWeekend =
                payload.value === "Sat" || payload.value === "Sun";
              return (
                <text
                  x={x}
                  y={y + 10}
                  textAnchor="middle"
                  fill={isWeekend ? "#e63946" : "#9ca3af"}
                  fontSize={13}
                >
                  {payload.value}
                </text>
              );
            }}
          />

          {/* Light gray full column */}
          <Bar
            data={backgroundData}
            dataKey="height"
            fill="#E5E7EB"
            radius={[20, 20, 20, 20]}
          />

          {/* Purple shorter column */}
          <Bar
            dataKey="value"
            fill="#6C63FF"
            radius={[20, 20, 20, 20]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
