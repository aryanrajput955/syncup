"use client";

const applications = [
  {
    title: "Jr. Front-end Developer",
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    appliedOn: "08/08/2023",
    status: "In-progress",
    statusColor: "bg-amber-100 text-amber-700",
  },
  {
    title: "Senior Back-end Developer",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/960px-Google_%22G%22_logo.svg.png",
    appliedOn: "24/07/2023",
    status: "Applied",
    statusColor: "bg-primary-bg text-primary",
  },
  {
    title: "UI/UX designer",
    company: "Meta",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    appliedOn: "01/05/2023",
    status: "Offered",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
];

export default function ApplicationTable() {
  return (
    <div className="bg-bg-card rounded-xl border border-border-clr p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h3 className="text-lg font-bold text-text-primary">Job Application Status</h3>
        <div className="flex items-center gap-4 flex-wrap">
          <label className="flex items-center gap-2 text-xs text-text-secondary font-medium cursor-pointer">
            New
            <div className="w-9 h-5 bg-primary rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
          </label>
          <label className="flex items-center gap-2 text-xs text-text-secondary font-medium cursor-pointer">
            In Progress
            <div className="w-9 h-5 bg-primary rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
          </label>
          <label className="flex items-center gap-2 text-xs text-text-secondary font-medium cursor-pointer">
            Pending Task
            <div className="w-9 h-5 bg-border-clr rounded-full relative">
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
          </label>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border-clr rounded-lg text-xs text-text-secondary font-medium bg-transparent cursor-pointer hover:border-primary hover:text-primary transition-colors">
            Sort By
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="16" y2="12" />
              <line x1="4" y1="18" x2="12" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border-clr">
              <th className="text-left text-xs font-semibold text-text-muted py-3 pr-4">Job title</th>
              <th className="text-left text-xs font-semibold text-text-muted py-3 pr-4">Company</th>
              <th className="text-left text-xs font-semibold text-text-muted py-3 pr-4">Applied on</th>
              <th className="text-left text-xs font-semibold text-text-muted py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, i) => (
              <tr key={i} className="border-b border-border-clr last:border-b-0 hover:bg-bg-main transition-colors">
                <td className="py-4 pr-4">
                  <span className="text-sm font-semibold text-text-primary">{app.title}</span>
                </td>
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-3">
                    <img src={app.logo} alt={app.company} className="w-5 h-5 object-contain" />
                    <span className="text-sm text-text-secondary">{app.company}</span>
                  </div>
                </td>
                <td className="py-4 pr-4">
                  <span className="text-sm text-text-secondary">{app.appliedOn}</span>
                </td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${app.statusColor}`}>
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
