import * as Yup from "yup";
import { checkDuplicateUser } from "../services/user.service";

const isNotDuplicateUser = async (value) => {
  try {
    const response = await checkDuplicateUser({ data: { value: value } });
    return response.data.data.isNotExit;
  } catch (error) {
    return false;
  }
};

const baseUserSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .test({
      name: "duplicate",
      exclusive: true,
      message: "Username already exists",
      test: async function (value) {
        const result = await isNotDuplicateUser(value);
        return result;
      },
    }),
  email: Yup.string()
    .email()
    .required("Email is required")
    .test({
      name: "duplicate",
      exclusive: true,
      message: "Email already exists",
      test: async function (value) {
        const result = await isNotDuplicateUser(value);
        return result;
      },
    }),
  password: Yup.string()
    .min(8)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must be strong ( eg.$123abcdefG )"
    )
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Passwords and confirm password must be the same"
    )
    .required("Confirm Password is required"),
  description: Yup.string(),
  creater: Yup.string()
    .length(24)
    .matches(/^[a-fA-F0-9]{24}$/),
  updator: Yup.string()
    .length(24)
    .matches(/^[a-fA-F0-9]{24}$/),
  role: Yup.string().default(() => "USER"),
  status: Yup.string().default(() => "ACTIVE"),
});

export const signUpUser = baseUserSchema;

export const signInUser = baseUserSchema.shape({
  email: Yup.string().email().required("Email is required"),
  username: Yup.string().notRequired(),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().notRequired(),
});

export const updateUserInfo = baseUserSchema.shape({
  password: Yup.string().notRequired(),
  confirm_password: Yup.string().when("password", {
    is: (val) => val && val.length > 0,
    then: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords and confirm password must be the same"
    ),
  }),
});

export const updatePassword = baseUserSchema;
