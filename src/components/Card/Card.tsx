import { FC } from "react";
import cn from "classnames";
import { CARD_STYLE_VARIANTS } from "@/app/credits/constant";
import { CardVariants } from "@/app/credits/types";

interface Props {
  time: string;
  description: string;
  price: string;
  credit: string;
  variant: CardVariants;
}

export const Card: FC<Props> = ({
  time,
  description,
  credit,
  price,
  variant,
}) => {
  return (
    <div
      className={cn(
        "w-full lg:w-[300px] lg:h-[320px] rounded-2xl flex flex-col items-center justify-between p-6 shadow-lg transition-transform duration-300",
        CARD_STYLE_VARIANTS[variant]
      )}
    >
      {variant === CardVariants.POPULAR && (
        <div className="absolute top-[-20px] left-[35%] right-0 p-2 bg-gray-900 rounded-2xl text-white text-center w-[100px]">
          Popular
        </div>
      )}
      <p className="text-2xl md:text-3xl font-extrabold">{time}</p>
      <p className="text-base md:text-lg text-gray-500 text-center px-4">
        {description}
      </p>
      <p className="text-xl md:text-2xl font-semibold">{price}</p>
      <button
        className={cn(
          "w-full md:w-40 h-12 flex justify-center items-center rounded-lg py-2 bg-[#2C2C2C] hover:bg-[#3F3F3F] text-white font-bold text-lg md:text-xl"
        )}
      >
        Get Credits
      </button>
    </div>
  );
};
