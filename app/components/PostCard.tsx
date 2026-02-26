"use client";

import React from "react";

interface PostCardProps {
  id: string;
  userName: string;
  userAvatar: string;
  timestamp: string;
  content: React.ReactNode;
  image?: string;
  likes: number;
  reactions: number;
  comments: number;
  shares: number;
  saved: number;
}

export default function PostCard({
  id,
  userName,
  userAvatar,
  timestamp,
  content,
  image,
  likes,
  reactions,
  comments,
  shares,
  saved,
}: PostCardProps) {
  return (
    <div className="bg-bg-card rounded-xl shadow-sm border border-border-clr overflow-hidden p-5" id={`post-${id}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <img src={userAvatar} alt={userName} className="w-[42px] h-[42px] rounded-full object-cover" />
          <div>
            <div className="text-sm font-semibold text-text-primary">{userName}</div>
            <div className="text-xs text-text-muted">{timestamp}</div>
          </div>
        </div>
        <button className="bg-transparent border-none cursor-pointer text-text-muted p-1 rounded-lg transition-colors hover:bg-bg-main" title="More options">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed text-text-secondary mb-4 [&>strong]:text-text-primary [&>strong]:font-semibold">
        {content}
      </p>

      {/* Image */}
      {image && (
        <img src={image} alt="Post content" className="w-full rounded-lg mb-4 object-cover max-h-[350px]" />
      )}

      {/* Stats */}
      <div className="flex items-center justify-between py-3 border-t border-b border-border-clr">
        {/* Reactions */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-text-muted text-[13px] cursor-pointer transition-colors hover:text-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
              <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
            </svg>
            {likes}
          </span>
          <span className="flex items-center gap-1 text-text-muted text-[13px] cursor-pointer transition-colors hover:text-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
            {reactions}
          </span>
          <span className="flex items-center gap-1 text-text-muted text-[13px] cursor-pointer transition-colors hover:text-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </span>
        </div>

        {/* Engagement */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-xs text-text-muted cursor-pointer transition-colors hover:text-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            {comments} Comments
          </span>
          <span className="flex items-center gap-1 text-xs text-text-muted cursor-pointer transition-colors hover:text-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            {shares} Shares
          </span>
          <span className="flex items-center gap-1 text-xs text-text-muted cursor-pointer transition-colors hover:text-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
            {saved} Saved
          </span>
        </div>
      </div>

      {/* Comment Input */}
      <div className="flex items-center gap-2.5 pt-3.5">
        <img src="/img4.png" alt="Your avatar" className="w-8 h-8 rounded-full object-cover shrink-0" />
        <div className="flex-1 relative flex items-center">
          <input
            type="text"
            placeholder="Write your comment..."
            className="w-full h-9 pl-3.5 pr-[100px] bg-bg-main border border-border-clr rounded-full text-[13px] text-text-primary outline-none transition-colors focus:border-primary placeholder:text-text-muted"
            id={`comment-input-${id}`}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button className="bg-transparent border-none cursor-pointer text-text-muted p-1 flex items-center transition-colors hover:text-primary" title="Attach">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
              </svg>
            </button>
            <button className="bg-transparent border-none cursor-pointer text-text-muted p-1 flex items-center transition-colors hover:text-primary" title="Emoji">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </button>
            <button className="bg-transparent border-none cursor-pointer text-text-muted p-1 flex items-center transition-colors hover:text-primary" title="Image">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
