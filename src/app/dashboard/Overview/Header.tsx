import Image from "next/image";
import helpIcon from "./help.svg";
import searchIcon from "./search.svg";
import microPhoneIcon from "./microphone.svg";
import moreIcon from "./more.svg";

export default function Header(){
    return (<div className="bg-white py-3 px-8 flex items-center gap-4 border-b border-[#D9D9D9]">
    <div className="flex items-center gap-4 w-[360px]">
      <h1 className="text-[#1A181E] text-regular">Payments</h1>
      <div className="flex items-center gap-[6px] text-xs">
        <Image src={helpIcon} height={12.6} width={12.6} alt="Help icon" />
        <span className="text-[#4D4D4D]">How it works</span>
      </div>
    </div>
    <div className="bg-[#F2F2F2] w-[400px] rounded-md flex items-center gap-2 py-[9px] px-4">
      <Image src={searchIcon} height={16} width={16} alt="Search icon" />
      <input type="text" placeholder="Search features, tutorials, etc." className="bg-[#F2F2F2] w-full outline-none"/>
    </div>
    <div className="flex flex-1 gap-2 items-center justify-end">
      <button className="bg-[#E6E6E6] h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-300">
        <Image
          src={microPhoneIcon}
          height={16}
          width={16}
          alt="Microphone icon"
        />
      </button>
      <button className="bg-[#E6E6E6] h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-300">
        <Image src={moreIcon} height={16} width={16} alt="More icon" />
      </button>
    </div>
  </div>)
}