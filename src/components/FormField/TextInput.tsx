import React, { FC, KeyboardEvent, useMemo } from "react";
import PhoneInput from "react-phone-number-input/input";
import InputMask from "react-input-mask";

import cn from "classnames";
import { useField, useFormikContext } from "formik";
import { IFormField } from "@/@types/form";
import { FormField } from ".";
import { TEXT_INPUT_STYLE_VARIANTS } from "./constants";
import { FormFieldVariants } from "./types";

export const TextInput: FC<IFormField> = ({
  className,
  fieldClassName,
  labelClassName,
  id,
  label,
  variant = FormFieldVariants.PRIMARY,
  placeholder,
  isTextArea,
  ...props
}) => {
  const fieldId = id || props.name;
  const { handleSubmit } = useFormikContext();
  const [{ value, onChange, ...field }, { error, touched }, { setValue }] =
    useField(fieldId);
  const isShownError = Boolean((touched || value) && error);

  const onKeyDownEnter = (e: KeyboardEvent) => {
    // Only handle Enter key submission for regular inputs, not textareas
    if (e.key === "Enter" && !isTextArea) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const combinedClassNames = cn(
    "w-full outline-none",
    TEXT_INPUT_STYLE_VARIANTS[variant],
    className,
    {
      "resize-y min-h-[120px]": isTextArea,
      "!border-red-base": error,
    }
  );

  const isTelField = props?.type === "tel";

  const InputComponent = useMemo(() => {
    if (isTelField) {
      return PhoneInput;
    }
    if (props?.mask) {
      return InputMask;
    } else if (isTextArea) {
      return "textarea";
    } else {
      return "input";
    }
  }, [props?.mask, isTextArea, isTelField]);

  //   const onChangePhoneValue = (inputValue: string) => {
  //     if (inputValue) {
  //       setValue(inputValue);
  //     }
  //   };
  const onChangePhoneValue = (inputValue: any | undefined) => {
    setValue(inputValue || ""); // Приводим к строке, если undefined
  };

  // Handle textarea specific props
  const textareaProps = isTextArea
    ? {
        rows: 4,
        style: { whiteSpace: "pre-wrap" },
      }
    : {};

  return (
    <FormField
      className={fieldClassName}
      labelClassName={labelClassName}
      variant={variant}
      label={label}
      labelFor={fieldId}
      isShownError={isShownError}
      error={error}
    >
      {isTelField ? (
        <PhoneInput
          id={fieldId}
          className={combinedClassNames}
          value={value}
          placeholder={placeholder}
          maxLength={20}
          onChange={onChangePhoneValue}
          {...props}
        />
      ) : props?.mask ? (
        <InputMask
          mask={props.mask} // Передаем mask только если она есть
          {...props}
        >
          {(inputProps: any) => (
            <input
              {...inputProps}
              id={fieldId}
              className={combinedClassNames}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              {...field}
              onKeyDown={onKeyDownEnter}
            />
          )}
        </InputMask>
      ) : isTextArea ? (
        <textarea
          id={fieldId}
          className={combinedClassNames}
          value={value}
          placeholder={placeholder}
          rows={4}
          style={{ whiteSpace: "pre-wrap" }}
          onChange={onChange}
          {...props}
          {...field}
          onKeyDown={onKeyDownEnter}
        />
      ) : (
        <input
          id={fieldId}
          className={combinedClassNames}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
          {...field}
          onKeyDown={onKeyDownEnter}
        />
      )}
    </FormField>
  );
};
