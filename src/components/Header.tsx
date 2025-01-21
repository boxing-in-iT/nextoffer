import Image from "next/image";
import Logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className="w-full max-h-20 border-b-2  border-[#CAC4D0] ">
      <div className="flex w-80 justify-start items-center  border-r-2 border-[#CAC4D0] px-5">
        {/* <Image src={logo} alt="Описание изображения" width={75} height={75} /> */}
        <Logo />
        <p className=" font-bold text-[48px]">NextOffer</p>
      </div>
    </header>
  );
};
