"use client";

export default function CreatePost() {
  return (
    <div className="bg-bg-card rounded-xl shadow-sm border border-border-clr overflow-hidden p-5" id="create-post">
      <div className="text-[15px] font-semibold text-text-primary mb-3.5">Create a Post</div>
      <div className="flex items-center gap-3">
        <img src="/img4.png" alt="Your avatar" className="w-10 h-10 rounded-full object-cover shrink-0" />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 h-[42px] px-4 bg-bg-main border border-border-clr rounded-full text-sm text-text-primary outline-none transition-colors focus:border-primary placeholder:text-text-muted"
          id="create-post-input"
        />
        <button className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-transparent border-none cursor-pointer text-primary transition-all hover:bg-primary-bg" id="create-post-send" title="Send">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
