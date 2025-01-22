import { Sizes } from "@/types/sizes";
import { CardVariants } from "./types";
import cn from "classnames";

const DEFAULT_BUTTON_CLASSNAME = "rounded-20 text-sm font-semibold";

export const CARD_STYLE_VARIANTS = {
  [CardVariants.POPULAR]: cn(
    "bg-[#3A4AFF99] text-white-base",
    DEFAULT_BUTTON_CLASSNAME
  ),
  [CardVariants.REGULAR]: cn(
    "bg-[#3A4AFF42] border border-purple-base ",
    DEFAULT_BUTTON_CLASSNAME
  ),
};

export const BUTTON_STYLE_SIZE = {
  [Sizes.XS]: "px-6 py-1",
  [Sizes.S]: "py-2.5 px-10.75",
};
