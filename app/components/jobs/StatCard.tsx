"use client";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  color: string;
}

export default function StatCard({ title, value, change, color }: StatCardProps) {
  const barColors: Record<string, string[]> = {
    purple: ["bg-primary", "bg-primary/60", "bg-primary/80", "bg-primary/40", "bg-primary/90"],
    green: ["bg-success", "bg-success/60", "bg-success/80", "bg-success/40", "bg-success/90"],
    orange: ["bg-warning", "bg-warning/60", "bg-warning/80", "bg-warning/40", "bg-warning/90"],
    red: ["bg-danger", "bg-danger/60", "bg-danger/80", "bg-danger/40", "bg-danger/90"],
  };

  const bars = barColors[color] || barColors.purple;

  return (
    <div className="bg-bg-card rounded-xl border border-border-clr p-5 flex-1 min-w-[180px]">
      <p className="text-sm font-medium text-text-secondary mb-2">{title}</p>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-3xl font-bold text-text-primary mb-1">{value}</h3>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            <span className="text-[11px] text-success font-medium">{change}</span>
          </div>
        </div>
        {/* Mini bar chart */}
        <div className="flex items-end gap-[3px] h-10">
          {[60, 40, 75, 30, 85].map((h, i) => (
            <div key={i} className={`w-[5px] rounded-sm ${bars[i]}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
