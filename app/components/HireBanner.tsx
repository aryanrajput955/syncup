"use client";

export default function HireBanner() {
  return (
    <div className="bg-bg-card rounded-xl shadow-sm border border-border-clr overflow-hidden p-3" id="hire-banner">
      <h3 className="text-[15px] font-bold text-text-primary mb-1">Hire faster with SyncUp!</h3>
      <p className="text-xs text-text-secondary mb-3 leading-relaxed">
        Network without limits and hire like a pro!
      </p>
      <div className="relative rounded-lg overflow-hidden">
        <img src="/img.jpg" alt="Team collaboration" className="w-full h-[140px] object-cover rounded-lg" />
        <span className="absolute top-2.5 right-2.5 bg-white text-text-primary px-4 py-1.5 rounded-lg text-[12px] font-bold shadow-md">
          30% OFF
        </span>
      </div>
    </div>
  );
}
