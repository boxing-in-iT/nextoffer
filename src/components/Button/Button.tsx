import React, { FC, memo, MouseEventHandler, ReactNode } from "react";
import cn from "classnames";
import { Sizes } from "@/types/sizes";
import { ButtonVariants } from "./types";
import { BUTTON_STYLE_SIZE, BUTTON_STYLE_VARIANTS } from "./constant";

interface Props {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  variant?: ButtonVariants;
  size?: Sizes;
  type?: "button" | "submit" | "reset";
  leaderSize?: Sizes;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  form?: string;
}

export const Button: FC<Props> = memo(
  ({ children, className, variant, size, type, isDisabled, onClick, form }) => {
    const combinedClassNames = cn(
      "flex justify-center items-center outline-0 transition ease-in-out duration-200 active:translate-y-0.5 active:duration-150 active:brightness-95 disabled:opacity-50 disabled:active:translate-y-0 disabled:brightness-100",
      variant ? BUTTON_STYLE_VARIANTS[variant] : "",
      size ? BUTTON_STYLE_SIZE[size] : "",
      className
    );

    return (
      <button
        className={combinedClassNames}
        type={type}
        onClick={onClick}
        disabled={isDisabled}
        form={form}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
