import { FC } from "react";

import cn from "classnames";
import { CARD_STYLE_VARIANTS } from "@/app/credits/constant";
import { CardVariants } from "@/app/credits/types";

interface Props {
  time: string;
  description: string;
  price: string;
  variant: CardVariants; // Добавляем новый пропс
}

export const Card: FC<Props> = ({ time, description, price, variant }) => {
  return (
    <div
      className={cn(
        "w-[300px] bg-[#C5C6C64F] h-[300px] rounded-lg flex flex-col items-center justify-around p-5",
        CARD_STYLE_VARIANTS[variant]
      )}
    >
      <p className="text-4xl font-bold">{time}</p>
      <p className="text-l">{description}</p>
      <p className="text-xl font-bold">{price}</p>
      <button
        className={cn(
          "w-32 h-8 flex justify-center items-center rounded-lg py-2 text-white font-bold text-xl"
          // Применяем стиль в зависимости от варианта
        )}
      >
        Get Credits
      </button>
    </div>
  );
};
