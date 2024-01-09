import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export default function Sidebar() {
  return (
    <div className="flex w-56 h-screen overflow-auto flex-col items-start justify-between text-white py-4 px-[0.63rem] bg-[#1E2640]">
      <div className="w-full flex flex-1 flex-col gap-6">
        <Header />
        <Menu />
      </div>
      <Footer />
    </div>
  );
}
