"use client";

import Image from "next/image";
import Logo from "../assets/logo.svg";
import { usePathname, useRouter } from "next/navigation";
import { USER_NAV_ITEMS } from "./Navigation";
import Link from "next/link";

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
    <header className="w-full flex gap-5 min-h-24 border-b-2  border-[#CAC4D0] ">
      <div className="flex min-w-72 h-full justify-start items-center  border-r-2 border-[#CAC4D0] px-5">
        {/* <Image src={logo} alt="Описание изображения" width={75} height={75} /> */}
        <Logo />
        <p className=" font-bold text-[36px]">NextOffer</p>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className=" font-bold text-[36px]">{currentPage}</p>
        {currentPage === "Interviews" && (
          <div className="pr-5 " onClick={openSignUpInterview}>
            <button className="bg-[#009951] rounded-lg text-white px-5 py-2">
              Start interview
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
