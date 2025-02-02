import React, { FC } from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode; // Разрешаем передавать undefined
  className?: string;
  isShownError?: boolean; // Разрешаем undefined
}

export const Error: FC<Props> = ({
  children,
  className,
  isShownError = false, // Устанавливаем значение по умолчанию
}) => {
  if (!isShownError || !children) return null; // Не рендерим пустые ошибки

  return (
    <div
      className={cn(
        "absolute -bottom-4 left-3 text-xs text-red-base",
        className
      )}
    >
      {children}
    </div>
  );
};
