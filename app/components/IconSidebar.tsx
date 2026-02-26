"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { PiBriefcase, PiChatsCircle } from "react-icons/pi";
import { TbGridDots } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi2";

const sidebarItems = [
  { id: "home", label: "Home", icon: <GoHome size={22} />, href: "/" },
  { id: "briefcase", label: "Jobs", icon: <PiBriefcase size={22} />, href: "/jobs" },
  { id: "network", label: "Network", icon: <TbGridDots size={22} />, href: "#" },
  { id: "messages", label: "Messages", icon: <PiChatsCircle size={22} />, href: "#" },
  { id: "people", label: "People", icon: <HiOutlineUserGroup size={22} />, href: "#" },
];

export default function IconSidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-14 bg-bg-card border-r border-border-clr flex flex-col items-center py-4 gap-1 z-40 max-sm:hidden">
        {/* Logo at the top */}
        <div className="mb-4 pt-1">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 cursor-pointer object-contain" />
        </div>

        {sidebarItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href) && item.href !== "#";
          return (
            <Link
              key={item.id}
              href={item.href}
              id={`sidebar-${item.id}`}
              title={item.label}
              className={`relative w-10 h-10 rounded-lg flex items-center justify-center no-underline cursor-pointer transition-all ${
                isActive
                  ? "bg-primary-bg text-primary before:content-[''] before:absolute before:-left-[7px] before:top-0 before:w-[3px] before:h-full before:bg-primary before:rounded-r"
                  : "bg-transparent text-text-muted hover:bg-primary-bg hover:text-primary"
              }`}
            >
              {item.icon}
            </Link>
          );
        })}
      </aside>

      {/* Mobile bottom nav */}
      <div className="hidden max-sm:flex fixed bottom-0 left-0 right-0 h-14 bg-bg-card border-t border-border-clr items-center justify-around z-50 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
        {sidebarItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href) && item.href !== "#";
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 no-underline text-[10px] p-1 transition-colors ${
                isActive ? "text-primary" : "text-text-muted"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
