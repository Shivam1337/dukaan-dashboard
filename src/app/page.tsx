import Overview from "./dashboard/Overview";
import Sidebar from "./dashboard/Sidebar";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <Overview />
    </main>
  );
}
