"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useFormik } from "formik";
import * as yup from "yup";

import useVisibility from "./useVisibility";

import FlexBox from "@component/FlexBox";
import TextField from "@component/text-field";
import { Button, IconButton } from "@component/buttons";
import { H3, H5, H6, SemiSpan } from "@component/Typography";
import Divide from "./components/Divide";
import SocialLinks from "./components/SocialLinks";
import { t } from "@utils/utils";
// STYLED COMPONENT
import { StyledRoot } from "./styles";

const initialValues = { email: "", password: "" };
type FormValues = { email: string; password: string };

export default function Login() {
  const router = useRouter();
  const { passwordVisibility, togglePasswordVisibility } = useVisibility();
  const formSchema = yup.object({
    email: yup.string().email(t("invalid email")).required(t("Email is required")),
    password: yup.string().required(t("Password is required"))
  });

  const handleFormSubmit = async (values: FormValues) => {
    router.push("/profile");
    console.log(values);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: formSchema
  });

  return (
    <StyledRoot boxShadow="large" borderRadius={8}>
      <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb="0.5rem">
          {t("Welcome To Ecommerce")}
        </H3>

        <H5 fontWeight="600" fontSize="12px" color="gray.800" textAlign="center" mb="2.25rem">
          {t("Log in with email & password")}
        </H5>

        <TextField
          fullWidth
          mb="0.75rem"
          name="email"
          type="email"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          placeholder="exmple@mail.com"
          label={t("Email or Phone Number")}
          errorText={touched.email && errors.email}
        />

        <TextField
          mb="1rem"
          fullWidth
          name="password"
          label={t("Password")}
          autoComplete="on"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="*********"
          value={values.password}
          errorText={touched.password && errors.password}
          type={passwordVisibility ? "text" : "password"}
          endAdornment={
            <IconButton
              p="0.25rem"
              mr="0.25rem"
              type="button"
              onClick={togglePasswordVisibility}
              color={passwordVisibility ? "gray.700" : "gray.600"}>
              {passwordVisibility ? <IconEyeOff stroke={1.5} /> : <IconEye stroke={1.5} />}
            </IconButton>
          }
        />

        <Button mb="1.65rem" variant="contained" color="primary" type="submit" fullWidth>
          {t("Login")}
        </Button>

        <Divide />

        <SocialLinks />

        <FlexBox justifyContent="center" mb="1.25rem">
          <SemiSpan>{t("Don’t have account?")}</SemiSpan>
          <Link href="/signup">
            <H6 ml="0.5rem" borderBottom="1px solid" borderColor="gray.900">
              {t("Sign Up")}
            </H6>
          </Link>
        </FlexBox>
      </form>

      <FlexBox justifyContent="center" bg="gray.200" py="19px">
        <SemiSpan>{t("Forgot your password?")}</SemiSpan>
        <Link href="/">
          <H6 ml="0.5rem" borderBottom="1px solid" borderColor="gray.900">
            {t("Reset It")}
          </H6>
        </Link>
      </FlexBox>
    </StyledRoot>
  );
}
