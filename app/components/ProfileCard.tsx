"use client";

export default function ProfileCard() {
  return (
    <div className="bg-bg-card rounded-xl shadow-sm border border-border-clr overflow-hidden p-6 pt-8 text-center" id="profile-card">
      {/* Avatar */}
      <div className="w-[90px] h-[90px] rounded-full mx-auto mb-4 p-[3px] border-[2.5px] border-primary-light">
        <img src="/img4.png" alt="Minnie Armstrong" className="w-full h-full rounded-full object-cover" />
      </div>

      <h2 className="text-[16px] font-semibold text-primary mb-1">Minnie Armstrong</h2>
      <p className="text-[13px] text-text-secondary mb-5">UI / UX Designer</p>

      {/* Progress bar */}
      <div className="w-full h-[3px] bg-border-clr rounded-full mb-4 overflow-hidden">
        <div className="h-full w-[75%] bg-success rounded-full"></div>
      </div>

      {/* Progress row */}
      <div className="flex items-center justify-between mb-5 px-0.5">
        <span className="text-[12px] text-text-secondary font-medium">75% Completed</span>
        <a href="#" className="text-[12px] text-primary font-medium flex items-center gap-1 no-underline hover:underline">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          Update profile
        </a>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button className="flex-1 h-12 rounded-lg border-[1.5px] border-primary bg-transparent text-primary text-[11px] font-semibold cursor-pointer transition-all hover:bg-primary hover:text-white" id="view-profile-btn">
          View Full Profile
        </button>
        <button className="flex-1 h-12 rounded-lg border-[1.5px] border-primary bg-transparent text-primary text-[11px] font-semibold cursor-pointer transition-all hover:bg-primary hover:text-white" id="share-profile-btn">
          Share Profile
        </button>
      </div>
    </div>
  );
}
