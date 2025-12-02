'use client';

import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Direct', value: 25, color: '#6C63FF' },  // Purple
  { name: 'Social', value: 15, color: '#FF4ED8' },  // Pink
  { name: 'Email', value: 7,  color: '#FFDD33' },   // Yellow
  { name: 'Other', value: 5,  color: '#FF6B57' },   // Red
];

// total = 25+15+7+5 = 52%
const totalPercentage = 52;

export default function VisitsBySourceChart({ isAnimationActive = true }) {
  return (
    <div className="w-full max-w-sm p-4 bg-white rounded-xl shadow-sm">
      {/* Title */}
      <h3 className="font-semibold text-gray-900 mb-4">Visits by Source</h3>

      {/* Chart */}
      <div className="flex justify-center relative">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            innerRadius="70%"
            outerRadius="90%"
            paddingAngle={6}
            cornerRadius={30}
            dataKey="value"
            isAnimationActive={isAnimationActive}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        {/* Center text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold text-gray-900">
          {totalPercentage}%
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex gap-2 justify-center space-y-2">
        {data.map((entry, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-700">{entry.name}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
    </div>
  );
}
