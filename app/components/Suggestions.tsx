"use client";

export default function Suggestions() {
  return (
    <div className="bg-bg-card rounded-xl shadow-sm border border-border-clr overflow-hidden p-3" id="suggestions-card">
      <h3 className="text-[15px] font-bold text-primary mb-1.5">Suggestions</h3>
      <p className="text-xs text-text-secondary mb-3.5 leading-relaxed">
        Below courses are suggested based on your current skills &amp; curated to
        help you stay updated with the current market trends.
      </p>
      <img src="/img.jpg" alt="Figma Basics Course" className="w-full h-[140px] object-cover rounded-lg mb-3" />
      <div className="text-sm font-bold text-text-primary mb-1">Figma: Basics</div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-secondary">Tyler Hooks</span>
        <span className="flex items-center gap-1 text-xs font-semibold text-warning">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          4.2
        </span>
      </div>
    </div>
  );
}
