import Image from "next/image";
import UserIcon from "@/assets/icons/User.svg";
import { Navigation } from "./Navigation";

export const Sidebar = () => {
  return (
    <aside
      className="min-w-72 scrollbar flex h-full
    min-h-[90vh] flex-col items-center justify-between   overflow-y-scroll border-r-2 rounded-l-3xl border-[#CAC4D0] bg-white-base  transition-all duration-200 ease-in-out"
    >
      <Navigation />
      <div className="flex gap-5 pb-5">
        <UserIcon />
        <p>user@domain.com</p>
      </div>
    </aside>
  );
};
