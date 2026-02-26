import Navbar from "./components/Navbar";
import IconSidebar from "./components/IconSidebar";
import ProfileCard from "./components/ProfileCard";
import AnalyticsCard from "./components/AnalyticsCard";
import SosmedStories from "./components/SosmedStories";
import CreatePost from "./components/CreatePost";
import PostCard from "./components/PostCard";
import HireBanner from "./components/HireBanner";
import Suggestions from "./components/Suggestions";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-16">
        <IconSidebar />
        <main className="ml-14 max-sm:ml-0 flex-1 flex gap-6 p-6 pr-6 max-md:p-4 max-md:gap-4 max-sm:p-3">
          {/* Left Column */}
          <aside className="w-[260px] shrink-0 flex flex-col gap-5 max-lg:hidden">
            <ProfileCard />
            <AnalyticsCard />
            <SosmedStories />
          </aside>

          {/* Center Column - Feed */}
          <section className="flex-1 min-w-0 flex flex-col gap-5">
            <CreatePost />
            <PostCard
              id="1"
              userName="Pan Feng Shui"
              userAvatar="/img3.jpg"
              timestamp="12 April at 09:28 PM"
              content={
                <>
                  Had an amazing interaction with the founder of{" "}
                  <strong>ABC Company</strong>, sharing my experience through
                  this small article
                </>
              }
              image="/img2.png"
              likes={3}
              reactions={8}
              comments={25}
              shares={231}
              saved={24}
            />
            <PostCard
              id="2"
              userName="Clara Kim"
              userAvatar="/img5.png"
              timestamp="12 April at 09:28 PM"
              content={
                <>
                  A Great Way To Generate All The Motivation You Need To Get Fit.
                </>
              }
              likes={3}
              reactions={8}
              comments={25}
              shares={231}
              saved={24}
            />
          </section>

          {/* Right Column */}
          <aside className="w-[300px] shrink-0 flex flex-col gap-5 max-xl:hidden">
            <HireBanner />
            <Suggestions />
          </aside>
        </main>
      </div>
    </>
  );
}
