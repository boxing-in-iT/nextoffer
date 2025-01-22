import { ComponentValue, Row, StyledValue } from "@/types/table";
import React from "react";

export const getKeyValue = (
  obj: Row,
  key: string
): string | React.ReactNode | number => {
  // Изменили JSX.Element на React.ReactNode
  const value = obj[key];

  if (typeof value === "string" || typeof value === "number") {
    return value;
  }

  if (isComponentValue(value)) {
    const Component = value.component;

    return <Component {...(value.props || {})} />;
  }

  if (isStyledValue(value)) {
    return (
      <span className="w-max" style={value.style}>
        {value.value}
      </span>
    );
  }

  return null;
};

const isComponentValue = (value: any): value is ComponentValue => {
  return value?.type === "component";
};

const isStyledValue = (value: any): value is StyledValue => {
  return value && "value" in value && "style" in value;
};
