import { IRenderFormField } from "@/@types/form";
import { TextInput } from "@/components/FormField/TextInput";
import { EMAIL } from "@/constants/cookieKeys";
import {
  EMAIL_VALIDATION_SCHEMA,
  PASSWORD_VALIDATION_SCHEMA,
  PHONE_VALIDATION_SCHEMA,
} from "@/constants/formValidation";
import * as Yup from "yup";

const LABEL_CLASSNAME = "font-semibold text-gray-dark";
const TEXT_INPUT_CLASSNAME = "px-6 py-4.5";

export const REGISTER_INITIAL_VALUES = {
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const REGISTER_FORM_FIELDS: IRenderFormField[] = [
  {
    name: "name",
    type: "text",
    label: "Name",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    placeholder: "Enter your name",
    className: TEXT_INPUT_CLASSNAME,
  },
  {
    name: "phone",
    type: "text",
    label: "Phone",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    placeholder: "Enter your phone number",
    className: TEXT_INPUT_CLASSNAME,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    placeholder: "Enter your email",
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
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    placeholder: "Confirm password",
    className: TEXT_INPUT_CLASSNAME,
  },
];

export const REGISTER_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  phone: PHONE_VALIDATION_SCHEMA,
  email: EMAIL_VALIDATION_SCHEMA,
  password: PASSWORD_VALIDATION_SCHEMA,
});
