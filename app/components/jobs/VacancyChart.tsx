"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { month: "Jan", sent: 400, interviews: 200, rejected: 100 },
  { month: "Feb", sent: 500, interviews: 300, rejected: 150 },
  { month: "Mar", sent: 550, interviews: 350, rejected: 120 },
  { month: "Apr", sent: 620, interviews: 400, rejected: 180 },
  { month: "May", sent: 580, interviews: 380, rejected: 160 },
  { month: "Jun", sent: 600, interviews: 420, rejected: 200 },
  { month: "Jul", sent: 650, interviews: 500, rejected: 220 },
  { month: "Aug", sent: 700, interviews: 550, rejected: 180 },
  { month: "Sep", sent: 500, interviews: 600, rejected: 250 },
  { month: "Oct", sent: 450, interviews: 400, rejected: 300 },
  { month: "Nov", sent: 400, interviews: 350, rejected: 280 },
  { month: "Dec", sent: 380, interviews: 300, rejected: 250 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name: string; color: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-text-primary text-white px-4 py-3 rounded-xl shadow-lg text-xs">
        <p className="font-semibold mb-2">{label} 2025</p>
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
            <span>{entry.value}</span>
            <span className="text-gray-400">{entry.name}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function VacancyChart() {
  return (
    <div className="bg-bg-card rounded-xl border border-border-clr p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h3 className="text-lg font-bold text-text-primary">Vacancy Stats</h3>
        <div className="flex items-center gap-5 flex-wrap">
          <label className="flex items-center gap-2 text-xs text-text-secondary font-medium cursor-pointer">
            Application Sent
            <div className="w-9 h-5 bg-primary rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
          </label>
          <label className="flex items-center gap-2 text-xs text-text-secondary font-medium cursor-pointer">
            Interviews
            <div className="w-9 h-5 bg-success rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
          </label>
          <label className="flex items-center gap-2 text-xs text-text-secondary font-medium cursor-pointer">
            Rejected
            <div className="w-9 h-5 bg-border-clr rounded-full relative">
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
          </label>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border-clr rounded-lg text-xs text-text-secondary font-medium bg-transparent cursor-pointer hover:border-primary hover:text-primary transition-colors">
            This Year
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sent"
            stroke="#6C5CE7"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6, fill: "#6C5CE7", strokeWidth: 2, stroke: "#fff" }}
            name="Application Sent"
          />
          <Line
            type="monotone"
            dataKey="interviews"
            stroke="#10B981"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
            name="Interviews"
          />
          <Line
            type="monotone"
            dataKey="rejected"
            stroke="#EF4444"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6, fill: "#EF4444", strokeWidth: 2, stroke: "#fff" }}
            name="Rejected"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          Application Sent
        </div>
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <span className="w-2.5 h-2.5 rounded-full bg-success" />
          Interviews
        </div>
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <span className="w-2.5 h-2.5 rounded-full bg-danger" />
          Rejected
        </div>
      </div>
    </div>
  );
}
