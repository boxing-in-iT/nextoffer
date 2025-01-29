import { Sizes } from "@/types/sizes";
import { CardVariants } from "./types";
import cn from "classnames";

const DEFAULT_BUTTON_CLASSNAME = "rounded-20 text-sm font-semibold";

export const CARD_STYLE_VARIANTS = {
  [CardVariants.POPULAR]: cn(
    "relative bg-white shadow-xl rounded-xl border border-purple-base",
    "before:content-[''] before:absolute before:inset-0 before:-z-10",
    "before:bg-gradient-to-r before:from-[#7dd3fc] before:to-[#bef264] before:blur-lg",
    DEFAULT_BUTTON_CLASSNAME
  ),
  [CardVariants.REGULAR]: cn(
    "bg-transparent shadow-xl rounded-xl border border-purple-base ",
    DEFAULT_BUTTON_CLASSNAME
  ),
};

export const BUTTON_STYLE_SIZE = {
  [Sizes.XS]: "px-6 py-1",
  [Sizes.S]: "py-2.5 px-10.75",
};
