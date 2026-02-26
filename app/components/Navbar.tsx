"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-14 right-0 h-16 bg-bg-card border-b border-border-clr flex items-center justify-between px-6 z-50 shadow-sm">
      {/* Left - Just a placeholder to help center the search bar */}
      <div className="flex-1"></div>

      {/* Center - Search */}
      <div className="flex-2 flex justify-center">
        <div className="relative w-full max-w-[420px] max-md:hidden" id="navbar-search">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
            <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 pl-10 pr-4 bg-bg-main border border-border-clr rounded-full text-sm text-text-primary outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_rgba(108,92,231,0.1)] placeholder:text-text-muted"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 flex items-center justify-end gap-2">
        <button className="relative w-10 h-10 rounded-full flex items-center justify-center bg-bg-main border border-border-clr cursor-pointer text-text-secondary transition-all hover:bg-primary-bg hover:text-primary hover:border-primary-light" title="Messages">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-bg-card"></span>
        </button>

        <button className="relative w-10 h-10 rounded-full flex items-center justify-center bg-bg-main border border-border-clr cursor-pointer text-text-secondary transition-all hover:bg-primary-bg hover:text-primary hover:border-primary-light" title="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-bg-card"></span>
        </button>

        <img src="/img4.png" alt="Profile" className="w-9 h-9 rounded-full object-cover cursor-pointer border-2 border-border-clr ml-1 transition-colors hover:border-primary" />

        <button className="bg-transparent border-none cursor-pointer text-text-muted flex items-center p-1" title="Menu">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
