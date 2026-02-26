import Navbar from "../components/Navbar";
import IconSidebar from "../components/IconSidebar";
import StatCard from "../components/jobs/StatCard";
import VacancyChart from "../components/jobs/VacancyChart";
import ApplicationTable from "../components/jobs/ApplicationTable";
import RecommendedJobs from "../components/jobs/RecommendedJobs";

export default function JobsPage() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-16">
        <IconSidebar />
        
        <main className="ml-14 max-sm:ml-0 flex-1 flex flex-col p-6 pr-6 max-md:p-4 max-sm:p-3">
          {/* Header & Stats - Top Section */}
          <div className="flex flex-col gap-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-2xl font-bold text-text-primary mb-1">
                  Welcome back, Julie 👋
                </h1>
                <p className="text-sm text-text-muted">
                  Here&apos;s what you need to focus on today
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 border border-border-clr rounded-xl text-sm text-text-secondary font-medium bg-bg-card cursor-pointer hover:border-primary hover:text-primary transition-colors">
                  Last 30 Days
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold border-none cursor-pointer hover:bg-[#5B4BD5] transition-colors">
                  Search Job
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex gap-4 flex-wrap">
              <StatCard title="Active Jobs" value="03" change="+5 from yesterday" color="purple" />
              <StatCard title="Jobs In Progress" value="03" change="+5 from yesterday" color="green" />
              <StatCard title="Shortlisted" value="03" change="+5 from yesterday" color="orange" />
              <StatCard title="On Hold" value="03" change="+5 from yesterday" color="red" />
            </div>
          </div>

          {/* Bottom Layout - Chart + Recommended */}
          <div className="flex gap-6 max-md:gap-4 items-start">
            {/* Left content: Chart & Table */}
            <div className="flex-1 min-w-0 flex flex-col gap-6">
              <VacancyChart />
              <ApplicationTable />
            </div>

            {/* Right content: Recommended Jobs */}
            <aside className="w-[300px] shrink-0 max-xl:hidden">
              <RecommendedJobs />
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
