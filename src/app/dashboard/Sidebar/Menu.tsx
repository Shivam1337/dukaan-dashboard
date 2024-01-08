import menuIcon1 from "../Sidebar/menu-icons/menu (1).svg";
import menuIcon2 from "../Sidebar/menu-icons/menu (2).svg";
import menuIcon3 from "../Sidebar/menu-icons/menu (3).svg";
import menuIcon4 from "../Sidebar/menu-icons/menu (4).svg";
import menuIcon5 from "../Sidebar/menu-icons/menu (5).svg";
import menuIcon6 from "../Sidebar/menu-icons/menu (6).svg";
import menuIcon7 from "../Sidebar/menu-icons/menu (7).svg";
import menuIcon8 from "../Sidebar/menu-icons/menu (8).svg";
import menuIcon9 from "../Sidebar/menu-icons/menu (9).svg";
import menuIcon10 from "../Sidebar/menu-icons/menu (10).svg";
import menuIcon11 from "../Sidebar/menu-icons/menu (11).svg";
import menuIcon12 from "../Sidebar/menu-icons/menu (12).svg";
import Image from "next/image";

export default function Menu() {
  return (
    <ul className="gap-1">
      {[
        {
          title: "Home",
          icon: menuIcon1,
        },
        {
          title: "Orders",
          icon: menuIcon2,
        },
        {
          title: "Products",
          icon: menuIcon3,
        },
        {
          title: "Delivery",
          icon: menuIcon4,
        },
        {
          title: "Marketing",
          icon: menuIcon5,
        },
        { 
          title: "Analytics",
          icon: menuIcon6,
        },
        {
          title: "Payments",
          icon: menuIcon7,
        },
        {
          title: "Tools",
          icon: menuIcon8,
        },
        {
          title: "Discounts",
          icon: menuIcon9,
        },
        {
          title: "Audience",
          icon: menuIcon10,
        },
        {
          title: "Appearance",
          icon: menuIcon11,
        },
        {
          title: "Plugins",
          icon: menuIcon12,
        }
      ].map((item, index) => {
        const isSelected = item.title === "Payments";
        return (
          <li key={item.title} className={`flex cursor-pointer items-center px-4 py-2 gap-3 ${isSelected ?'bg-white/10 rounded':'hover:bg-white/10'}`}>
          <Image src={item.icon} alt={item.title} width={20} height={20} />
          <span className="text-sm font-medium">{item.title}</span>
        </li>
        )
      })}
    </ul>
  );
}
