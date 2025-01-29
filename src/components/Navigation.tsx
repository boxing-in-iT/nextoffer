"use client";
import { NavigationItem } from "./NavigationItem";
import { INavigationItem } from "@/types/INavigationItemProps";
import { usePathname } from "next/navigation";

import HomeIcon from "@/assets/icons/Home.svg";
import Phone from "@/assets/icons/Phone.svg";
import ResumeManagerIcon from "@/assets/icons/ResumeManagerIcon.svg";
import CreditsPlanIcon from "@/assets/icons/Settings.svg";
import SupportIcon from "@/assets/icons/Mail.svg";

export const USER_NAV_ITEMS: INavigationItem[] = [
  { id: 1, label: "Dashboard", path: "/", icon: HomeIcon },
  { id: 2, label: "Interviews", path: "/interviews", icon: Phone },
  { id: 3, label: "Resume Manager", path: "/resume", icon: ResumeManagerIcon },
  { id: 4, label: "Credits & Plan", path: "/credits", icon: CreditsPlanIcon },
  { id: 5, label: "Support", path: "/support", icon: SupportIcon },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-6">
      <ul className="flex flex-col gap-4">
        {USER_NAV_ITEMS.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={pathname === item.path}
          />
        ))}
      </ul>
    </nav>
  );
};
