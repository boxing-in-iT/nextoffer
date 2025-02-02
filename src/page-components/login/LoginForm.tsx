"use client";
import useAuthStore from "@/store/auth-store";
import useUserStore from "@/store/user-store";
import { Form, FormikConfig, FormikProvider, useFormik } from "formik";
import { FC } from "react";
import { IFormikValues } from "./types";
import { AUTH_FORM_FIELDS, AUTH_INITIAL_VALUES } from "./constants";
import { RenderFormFields } from "@/components/RenderFormFields";
import Link from "next/link";
import { Button } from "@/components/Button/Button";
import { Sizes } from "@/types/sizes";
import { ButtonVariants } from "@/components/Button/types";

export const LoginForm: FC = () => {
  const { login, isLoading } = useAuthStore();

  const { getUser } = useUserStore();

  const formikProps: FormikConfig<IFormikValues> = {
    initialValues: AUTH_INITIAL_VALUES,
    onSubmit: (values) => {
      console.log("values", values);
    },
  };

  const formik = useFormik(formikProps);

  return (
    <div className="mt-10 w-full">
      <FormikProvider value={formik}>
        <Form>
          <div className="flex flex-col gap-6">
            <RenderFormFields fields={AUTH_FORM_FIELDS} />
          </div>

          <Link
            className="ml-auto mt-3 block w-max text-sm font-semibold text-purple-500 transition-all duration-300 hover:opacity-80"
            href={"/forget"}
          >
            Forget Password?
          </Link>

          <Button
            className="mt-6 w-full rounded-xl text-lg"
            size={Sizes.S}
            variant={ButtonVariants.PRIMARY}
            type="submit"
            isDisabled={isLoading}
            isLoading={isLoading}
          >
            Sign In
          </Button>
        </Form>
      </FormikProvider>
    </div>
  );
};
