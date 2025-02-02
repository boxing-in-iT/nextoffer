"use client";
import UserIcon from "@/assets/icons/User.svg";
import { Navigation } from "./Navigation";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <aside
      className={`min-w-72 h-[90vh] flex flex-col justify-between border-r border-gray-200 bg-white rounded-l-3xl ${
        isLoginPage ? "hidden" : ""
      }`}
    >
      <div className="p-6">
        <Navigation />
      </div>
      <div className="flex items-center gap-4 bg-gray-100 px-6 py-4 rounded-2xl m-4 shadow-sm">
        <UserIcon className="w-8 h-8 text-gray-500" />
        <p className="text-sm font-medium text-gray-700">user@domain.com</p>
      </div>
    </aside>
  );
};
