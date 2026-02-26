"use client";

const jobs = [
  {
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    time: "24 min. ago",
    colors: ["bg-primary", "bg-warning", "bg-success"],
  },
  {
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    time: "24 min. ago",
    colors: ["bg-danger", "bg-primary", "bg-success"],
  },
  {
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    time: "24 min. ago",
    colors: ["bg-primary", "bg-success", "bg-warning"],
  },
  {
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    time: "24 min. ago",
    colors: ["bg-warning", "bg-danger", "bg-primary"],
  },
];

export default function RecommendedJobs() {
  return (
    <div className="bg-bg-card rounded-xl border border-border-clr p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-text-primary">Recomended Jobs</h3>
        <button className="bg-transparent border-none cursor-pointer text-text-muted p-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      </div>

      <p className="text-[11px] text-text-muted font-bold tracking-wider mb-4 uppercase">Today</p>

      <div className="flex flex-col gap-4">
        {jobs.map((job, i) => (
          <div key={i} className="bg-white border border-border-clr rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4">
              <div className="flex items-start gap-3 mb-3">
                {/* 2x2 Grid Logo */}
                <div className="grid grid-cols-2 gap-[2px] mt-1 shrink-0">
                  <div className={`w-3.5 h-3.5 rounded-tr-xl rounded-bl-xl ${job.colors[0]}`} />
                  <div className={`w-3.5 h-3.5 rounded-tl-xl rounded-br-xl ${job.colors[1]}`} />
                  <div className={`w-3.5 h-3.5 rounded-tr-xl rounded-bl-xl ${job.colors[2]}`} />
                  <div className={`w-3.5 h-3.5 rounded-tl-xl rounded-br-xl bg-yellow-400`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-bold text-text-primary leading-tight">{job.title}</p>
                  <p className="text-sm text-text-secondary">{job.company}</p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-4 text-[12px] text-text-secondary pl-0 mb-1">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {job.rating} Trusted
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                  {job.type}
                </span>
              </div>
            </div>

            {/* Footer Divider & Stats */}
            <div className="border-t border-border-clr/50 px-4 py-2.5 bg-bg-main/10 flex items-center justify-between text-[11px] text-text-muted">
              <span>{job.rating} Trusted</span>
              <span>{job.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View all */}
      <button className="w-full mt-4 py-2.5 text-sm font-semibold text-text-secondary bg-transparent border-none cursor-pointer flex items-center justify-center gap-1 hover:text-primary transition-colors">
        View all posts
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
}
