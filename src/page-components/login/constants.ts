import { IRenderFormField } from "@/@types/form";
import { IFormikValues } from "./types";
import { TextInput } from "@/components/FormField/TextInput";
import * as Yup from "yup";
import {
  EMAIL_VALIDATION_SCHEMA,
  MIN_LENGTH_VALIDATION,
} from "@/constants/formValidation";

const LABEL_CLASSNAME = "font-semibold text-gray-dark";
const TEXT_INPUT_CLASSNAME = "px-6 py-4.5";

export const AUTH_INITIAL_VALUES: IFormikValues = {
  email: "",
  password: "",
};

export const AUTH_FORM_FIELDS: IRenderFormField[] = [
  {
    name: "email",
    type: "email",
    label: "Email",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    placeholder: "Enter your email id",
    className: TEXT_INPUT_CLASSNAME,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    placeholder: "Enter password",
    className: TEXT_INPUT_CLASSNAME,
  },
];

export const AUTH_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  email: EMAIL_VALIDATION_SCHEMA,
  password: MIN_LENGTH_VALIDATION(4),
});
