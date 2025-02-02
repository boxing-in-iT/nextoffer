"use client";
import useAuthStore from "@/store/auth-store";
import useUserStore from "@/store/user-store";
import { Form, FormikConfig, FormikProvider, useFormik } from "formik";
import { FC } from "react";

import { RenderFormFields } from "@/components/RenderFormFields";
import Link from "next/link";
import { Button } from "@/components/Button/Button";
import { Sizes } from "@/types/sizes";
import { ButtonVariants } from "@/components/Button/types";
import { IFormikValues } from "./types";
import { REGISTER_FORM_FIELDS, REGISTER_INITIAL_VALUES } from "./constant";

export const RegisterForm: FC = () => {
  const { login, isLoading } = useAuthStore();

  const { getUser } = useUserStore();

  const formikProps: FormikConfig<IFormikValues> = {
    initialValues: REGISTER_INITIAL_VALUES,
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
            <RenderFormFields fields={REGISTER_FORM_FIELDS} />
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
