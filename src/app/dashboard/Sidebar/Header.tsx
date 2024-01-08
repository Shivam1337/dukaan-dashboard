import Image from "next/image";
import logo from "./logo.png";
import arrowDownIcon from "./ArrowDown.svg";

export default function Header() {
  return (
    <div className="flex items-center w-full justify-between px-[0.53rem]">
      <div className="flex items-center gap-3 ">
        <Image src={logo} width={40} height={40} alt="logo" className="rounded-md" />
        <div>
          <div>Nishyan</div>
          <div className="text-white/80 underline cursor-pointer">Visit store</div>
        </div>
      </div>
      <Image
        src={arrowDownIcon}
        width={20}
        height={10}
        alt="arrow down"
        className="cursor-pointer"
      />
    </div>
  );
}
