"use client";

import Logo from "../assets/logo.svg";
import { usePathname, useRouter } from "next/navigation";
import { USER_NAV_ITEMS } from "./Navigation";

export const Header = () => {
  const pathname = usePathname();

  const currentPage =
    USER_NAV_ITEMS.find((item) => item.path === pathname)?.label ||
    "Unknown Page";

  const router = useRouter();

  const openSignUpInterview = () => {
    router.push("/interviews/signup");
  };

  return (
    <header className="w-full flex items-center min-h-20 border-b-[0.5px] border-gray-300 bg-white shadow-sm">
      {/* Левая часть: Логотип и название */}
      <div className="flex min-w-72 h-full items-center border-r-[0.5px] border-gray-300 px-6">
        <Logo className="w-12 h-12" />
        <p
          className="ml-3 text-3xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(45deg,  #2a3736, #2CA6A4)", // Цвета из логотипа
          }}
        >
          NextOfferAI
        </p>
      </div>

      {/* Центр: Заголовок страницы */}
      <div className="flex w-full justify-between items-center px-6">
        <p className="text-xl font-semibold text-gray-700">{currentPage}</p>

        {/* Кнопка (только для Interviews) */}
        {currentPage === "Interviews" && (
          <button
            onClick={openSignUpInterview}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-lg shadow-md transition-all"
          >
            Start Interview
          </button>
        )}
      </div>
    </header>
  );
};
