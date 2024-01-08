import Overview from "./dashboard/Overview";
import Sidebar from "./dashboard/Sidebar";

export default function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <Overview/>
    </main>
  );
}
