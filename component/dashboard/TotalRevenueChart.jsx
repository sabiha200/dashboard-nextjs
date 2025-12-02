'use client';

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', direct: 400, social: 240 },
  { name: 'Feb', direct: 320, social: 350 },
  { name: 'Mar', direct: 500, social: 300 },
  { name: 'Apr', direct: 420, social: 410 },
  { name: 'May', direct: 380, social: 290 },
  { name: 'Jun', direct: 460, social: 380 },
];

export default function TotalRevenueChart() {
  return (
    <div className="w-full max-w-sm p-4 bg-white rounded-xl shadow-sm h-[420px]">
      {/* Title */}
      <h3 className="font-semibold text-gray-900 mb-1">Total Revenue</h3>

      <hr className="border-gray-200 my-3" />

      {/* Chart */}
      <div className="h-48 w-full outline-none">
        <ResponsiveContainer>
          <AreaChart data={data}>
            {/* Hide the axes for a clean UI like the screenshot */}
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip cursor={false} />

            {/* Social (pink) */}
            <Area
              type="monotone"
              dataKey="social"
              stroke="#FF9EEA"
              fill="#FF9EEA"
              fillOpacity={0.6}
            />

            {/* Direct (purple) */}
            <Area
              type="monotone"
              dataKey="direct"
              stroke="#8C6EFF"
              fill="#8C6EFF"
              fillOpacity={0.8}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#8C6EFF' }}></span>
          <span className="text-sm text-gray-700">Direct</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#FF9EEA' }}></span>
          <span className="text-sm text-gray-700">Social</span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
    </div>
  );
}
