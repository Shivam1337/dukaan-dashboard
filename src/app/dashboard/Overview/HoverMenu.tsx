"use client";
import Image from "next/image";
import burgerMenuIcon from "./images/burger-menu.svg";
import { useState } from "react";
import Sidebar from "../Sidebar";
import closeIcon from "./images/close.svg";

export default function HoverMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={burgerMenuIcon}
          height={120}
          width={120}
          className="max-w-6"
          alt="Burger menu icon"
        />
      </button>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 h-screen bg-black/80 flex items-start ${
          isOpen ? "w-screen" : "w-0 overflow-hidden"
        } transition-all duration-500`}
        onClick={() => setIsOpen(false)}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Sidebar />
        </div>
        
        <Image
          src={closeIcon}
          height={120}
          width={120}
          className="max-w-6 m-4"
          alt="Close icon"
        />
      </div>
    </>
  );
}
