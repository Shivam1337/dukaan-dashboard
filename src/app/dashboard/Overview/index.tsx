import Header from "./Header";
import Summary from "./Summary";
import Transactions from "./Transactions";

export default function Overview() {
  return (
    <div className="w-full bg-[#FAFAFA] h-screen overflow-auto">
      <Header />
      <div className="p-6 flex flex-col gap-8">
        <Summary/>
        <Transactions/>
      </div>
    </div>
  );
}
