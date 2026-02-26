"use client";

interface StoryUser {
  name: string;
  role: string;
  avatar: string;
}

const stories: StoryUser[] = [
  { name: "Rakesh Sharma", role: "Front-end Developer", avatar: "/img3.jpg" },
  { name: "Rakesh Sharma", role: "Front-end Developer", avatar: "/img3.jpg" },
  { name: "Rakesh Sharma", role: "Front-end Developer", avatar: "/img3.jpg" },
];

export default function SosmedStories() {
  return (
    <div className="bg-bg-card rounded-xl shadow-sm border border-border-clr overflow-hidden p-4" id="sosmed-stories">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-semibold text-text-primary">Sosmed Stories</h3>
        <button className="bg-transparent border-none cursor-pointer text-text-muted p-1 flex items-center" title="More">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      </div>

      {/* Story items */}
      {stories.map((user, index) => (
        <div
          key={index}
          className={`flex flex-col gap-2.5 pb-3.5 mb-3.5 ${
            index < stories.length - 1 ? "border-b border-border-clr" : "pb-0 mb-0"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-text-primary">{user.name}</div>
              <div className="text-[11px] text-text-muted">{user.role}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-4 py-1.5 bg-primary text-white border-none rounded-full text-xs font-medium cursor-pointer transition-all hover:bg-[#5B4BD5]" id={`follow-btn-${index}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
              Follow
            </button>
            <button className="flex items-center gap-1 px-4 py-1.5 bg-transparent text-text-secondary border-[1.5px] border-border-clr rounded-full text-xs font-medium cursor-pointer transition-all hover:border-primary hover:text-primary" id={`message-btn-${index}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Message
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
