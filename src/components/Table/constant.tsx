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

const isComponentValue = (value: unknown): value is ComponentValue => {
  return (value as ComponentValue)?.type === "component";
};

const isStyledValue = (value: unknown): value is StyledValue => {
  // First, ensure value is an object before checking for properties
  return (
    typeof value === "object" &&
    value !== null &&
    "value" in value &&
    "style" in value
  );
};
