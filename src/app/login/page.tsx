"use client";
import { PageWrapper } from "@/components/PageWrapper/Login/PageWrapper";
import { LoginForm } from "@/page-components/login/LoginForm";
import Logo from "@/assets/logo.svg";
import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { RegisterForm } from "@/page-components/register/RegisterForm";

const LoginPage: FC = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const [isLogin, setIsLogin] = useState(isLoginPage);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <PageWrapper>
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center">
        <div className="flex items-center">
          <Logo width={50} height={50} />

          <p
            className="ml-3 text-3xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(45deg,  #2a3736, #2CA6A4)", // Цвета из логотипа
            }}
          >
            NextOfferAI
          </p>
        </div>

        {/* Switcher to change login and register */}
        <div className="mt-4 flex justify-between">
          <button
            className={`text-lg font-semibold ${
              isLogin ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={handleSwitch}
          >
            Login
          </button>
          <button
            className={`text-lg font-semibold ${
              !isLogin ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={handleSwitch}
          >
            Register
          </button>
        </div>

        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </PageWrapper>
  );
};

export default LoginPage;
