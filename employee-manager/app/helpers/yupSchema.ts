import * as yup from "yup";

export const employeeSchema = yup
  .object({
    first_name: yup
      .string()
      .matches(
        /^[a-zA-Z]{5,10}$/,
        "First name must be 6-10 characters long and contain only alphabets"
      )
      .required("First name cannot be empty"),
    last_name: yup
      .string()
      .matches(
        /^[a-zA-Z]{5,10}$/,
        "Last name must be 6-10 characters long and contain only alphabets"
      )
      .required("Last name cannot be empty"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email cannot be empty"),
    phone: yup
      .string()
      .matches(/^(?:\+94|0094|0)?(?:7[0-9])\d{7}$/, "Invalid phone number")
      .required("Phone number is required"),
    gender: yup.string().required("Required field"),
  })
  .required();
