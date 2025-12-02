"use client";

import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", completed: 0, pending: 0, unpaid: 0, delivered: 0 },
  { month: "Feb", completed: 40, pending: 0, unpaid: 0, delivered: 0 },
  { month: "Mar", completed: 20, pending: 30, unpaid: 0, delivered: 0 },
  { month: "Apr", completed: 0, pending: 70, unpaid: 0, delivered: 0 },
  { month: "May", completed: 0, pending: 50, unpaid: 0, delivered: 0 },
  { month: "Jun", completed: 0, pending: 0, unpaid: 0, delivered: 0 },
  { month: "Jul", completed: 0, pending: 0, unpaid: 30, delivered: 0 },
  { month: "Aug", completed: 0, pending: 0, unpaid: 60, delivered: 0 },
  { month: "Sep", completed: 0, pending: 0, unpaid: 0, delivered: 70 },
  { month: "Oct", completed: 0, pending: 0, unpaid: 0, delivered: 55 },
  { month: "Nov", completed: 0, pending: 0, unpaid: 0, delivered: 70 },
  { month: "Dec", completed: 0, pending: 0, unpaid: 0, delivered: 0 },
];

export default function SalesPerformanceChart() {
  return (
    <div className="w-full h-[435px] rounded-2xl p-4 bg-white shadow">
      <h2 className="text-lg font-semibold mb-3">Sales Performance</h2>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 30, left: 0, right: 0, bottom: 40 }}
        >
          {/* Gradients */}
          <defs>
            <linearGradient id="completed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF8C9A" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#FF8C9A" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="pending" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F3A4FF" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#F3A4FF" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="unpaid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#77B1FF" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#77B1FF" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="delivered" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B49BFF" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#B49BFF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
            height={20} // keeps ticks from pushing downward
          />

          <Tooltip />

          {/* Areas */}
          <Area
            type="monotone"
            dataKey="completed"
            stroke="none"
            fill="url(#completed)"
          />

          <Area
            type="monotone"
            dataKey="pending"
            stroke="none"
            fill="url(#pending)"
          />

          <Area
            type="monotone"
            dataKey="unpaid"
            stroke="none"
            fill="url(#unpaid)"
          />

          <Area
            type="monotone"
            dataKey="delivered"
            stroke="none"
            fill="url(#delivered)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
