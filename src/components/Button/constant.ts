import cn from "classnames";
import { Sizes } from "@/types/sizes";
import { ButtonVariants } from "./types";

const DEFAULT_BUTTON_CLASSNAME = "rounded-20 text-sm font-semibold";

export const BUTTON_STYLE_VARIANTS = {
  [ButtonVariants.PRIMARY]: cn(
    "bg-purple-base text-white-base",
    DEFAULT_BUTTON_CLASSNAME
  ),
  [ButtonVariants.SECONDARY]: cn(
    "bg-white-base border border-purple-base text-purple-base",
    DEFAULT_BUTTON_CLASSNAME
  ),
  [ButtonVariants.PRIMARY_SQUARE]:
    "bg-purple-base text-white-base text-sm rounded px-6 py-1",
  [ButtonVariants.SECONDARY_SQUARE]:
    "bg-white-base border border-purple-base text-purple-base text-sm rounded px-6 py-1",
  [ButtonVariants.PRIMARY_GRADIENT]: cn(
    "to-blue-base bg-gradient-to-r from-purple-ligth text-white-base",
    DEFAULT_BUTTON_CLASSNAME
  ),
  [ButtonVariants.WHITE]:
    "rounded-xl border border-gray-medium bg-white-base font-semibold text-xs uppercase",
  // Add the red button variant here
  [ButtonVariants.RED]:
    "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 disabled:bg-red-300",
};

export const BUTTON_STYLE_SIZE = {
  [Sizes.XS]: "px-6 py-1",
  [Sizes.S]: "py-2.5 px-10.75",
  [Sizes.M]: "py-3 px-12", // Add missing size if required
  [Sizes.L]: "py-3.5 px-14",
  [Sizes.XL]: "py-4 px-16",
  [Sizes.XXL]: "py-5 px-18",
};
