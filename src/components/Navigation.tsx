import { NavigationItem } from "./NavigationItem";

import {
  INavigationItem,
  INavigationItemProps,
} from "@/types/INavigationItemProps";
import HomeIcon from "@/assets/icons/Home.svg";
import Phone from "@/assets/icons/Phone.svg";
import ResumeManagerIcon from "@/assets/icons/ResumeManagerIcon.svg";
import CreditsPlanIcon from "@/assets/icons/Settings.svg";
import SupportIcon from "@/assets/icons/Mail.svg";
import Image from "next/image";

const USER_NAV_ITEMS: INavigationItem[] = [
  {
    id: 1,
    label: "Dashboard",
    path: "/dashboard",
    icon: HomeIcon,
  },
  {
    id: 2,
    label: "Interviews",
    path: "/interviews",
    icon: Phone,
  },
  {
    id: 3,
    label: "Resume Manager",
    path: "/resume",
    icon: ResumeManagerIcon,
  },
  {
    id: 4,
    label: "Credits & Plan",
    path: "/resume",
    icon: CreditsPlanIcon,
  },
  {
    id: 5,
    label: "Support",
    path: "/support",
    icon: SupportIcon,
  },
];

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {USER_NAV_ITEMS.map((item) => (
          <NavigationItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};
