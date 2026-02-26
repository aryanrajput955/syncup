"use client";

export default function AnalyticsCard() {
  return (
    <div className="bg-bg-card rounded-xl shadow-sm border border-border-clr overflow-hidden p-5" id="analytics-card">
      <h3 className="text-[15px] font-semibold text-text-primary mb-0.5">Analytics</h3>
      <p className="text-xs text-text-muted mb-4">Connections</p>

      {/* Badge */}
      <div className="text-center mb-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary text-white rounded-full text-xs font-semibold">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
          Analytics
        </span>
      </div>

      {/* SVG Chart */}
      <div className="w-full h-[120px] relative">
        <svg viewBox="0 0 220 100" width="100%" height="100%" preserveAspectRatio="none">
          <line x1="0" y1="25" x2="220" y2="25" stroke="#F3F4F6" strokeWidth="0.5" />
          <line x1="0" y1="50" x2="220" y2="50" stroke="#F3F4F6" strokeWidth="0.5" />
          <line x1="0" y1="75" x2="220" y2="75" stroke="#F3F4F6" strokeWidth="0.5" />
          <path d="M0,70 C30,65 50,55 70,50 C90,45 110,35 130,40 C150,45 170,25 190,20 C200,18 210,15 220,12" fill="none" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" />
          <path d="M0,70 C30,65 50,55 70,50 C90,45 110,35 130,40 C150,45 170,25 190,20 C200,18 210,15 220,12 L220,100 L0,100 Z" fill="url(#purpleGrad)" opacity="0.15" />
          <path d="M0,80 C30,78 50,72 70,68 C90,64 110,58 130,62 C150,66 170,55 190,50 C200,47 210,44 220,40" fill="none" stroke="#A29BFE" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
          <path d="M0,85 C30,82 50,78 70,75 C90,72 110,68 130,72 C150,76 170,65 190,58 C200,54 210,52 220,48" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6C5CE7" />
              <stop offset="100%" stopColor="#6C5CE7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Months */}
      <div className="flex justify-between px-1 mt-2">
        <span className="text-[11px] text-text-muted font-medium">Sept</span>
        <span className="text-[11px] text-text-muted font-medium">Oct</span>
        <span className="text-[11px] text-primary font-semibold">Nov</span>
      </div>
    </div>
  );
}
