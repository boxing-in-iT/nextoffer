import React, { FC, ReactNode } from "react";
import Logo from "@/assets/logo.svg";

interface Props {
  children: ReactNode;
}

export const PageWrapper: FC<Props> = ({ children }) => (
  <div className="flex h-full">
    <main className="h-full flex-1">
      <section className="flex min-h-full bg-white-base">
        <div className="min-h-full w-1/3 self-center px-28 py-10">
          {children}
        </div>

        {/* <div className="flex-1 bg-login-banner bg-cover bg-no-repeat"></div> */}
        <div className="flex-1 flex items-center justify-center border-l-[1px] border-gray-300">
          <Logo />
          <p
            className="ml-3 text-[72px] font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(45deg,  #2a3736, #2CA6A4)", // Цвета из логотипа
            }}
          >
            NextOfferAI
          </p>
        </div>
      </section>
    </main>
  </div>
);
