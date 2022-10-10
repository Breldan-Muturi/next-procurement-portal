import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  username: yup
    .string()
    .required("A username input is required")
    .min(3, "Enter a username between 3 - 16 characters long")
    .max(16, "Enter a username between 3 - 16 characters long"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("An email input is required"),
  password: yup
    .string()
    .min(8, "Please enter a stronger password")
    .max(20, "Use a password with a maximum of 20 characters")
    .required("A password input is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
});

export const loginSchema = yup.object().shape({
  username: yup.string().required("A username is required"),
  password: yup.string().required("A password is required"),
});

export const verifySchema = yup.object().shape({
  username: yup.string().required("We could not detect your username"),
  password: yup.string().required("We could not authenticate you"),
  code: yup.string().required("A verification code is required"),
});

export const forgotSchema = yup.object().shape({
  email: yup
    .string()
    .required("An email is required")
    .email("Enter a valid email"),
});

export const resetSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Please enter a stronger password")
    .max(20, "Use a password with a maximum of 20 characters")
    .required("A password input is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
});
