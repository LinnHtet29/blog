import React, { useEffect, useState } from "react";
import router from "../../../routes";
import { useSelector, useDispatch } from "react-redux";
import { signInUser, signUpUser } from "../../../validation/userValidator";
import schemaValidator from "../../../validation/schemaValidator";
import { Formik } from "formik";
import { useUserMutate, useUserQuery } from "../../../hooks/useUserQuery";
import {
  createUser,
  getAllUsers,
  signIn,
} from "../../../services/user.service";
import { switchSignInOrUp } from "../../../redux/features/system/formsModeSlice";

export default function UserSignInSignUpForm() {
  const dispatch = useDispatch();
  const currentMode = useSelector((state) => state.formsMode.signInOrUp);

  const {
    data: usersData,
    isLoading: userDataLoading,
    isError,
  } = useUserQuery("user", getAllUsers);

  const { mutate, isLoading } = useUserMutate(
    currentMode === "signin" ? signIn : createUser
  );

  const goToRecentPage = () => {
    router.navigate(-1);
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100 overflow-hidden">
      <div className="w-100 p-ms-0 p-lg-5 pb-3 pb-md-0">
        <div className="w-75 mx-auto">
          <button onClick={goToRecentPage} className="btn btn-secondary mb-5">
            Back
          </button>
          <h2 className="mb-3 mt-4 mt-md-0 ">Create a new account</h2>
          {/* <button className="btn btn-light w-100 d-flex justify-content-center align-items-center gap-2 p-2 border-secondary">
            <img
              height={"25px"}
              src="https://static.vecteezy.com/system/resources/thumbnails/012/871/371/small_2x/google-search-icon-google-product-illustration-free-png.png"
              alt="Icon"
            />
            <span className="fs-6">Continue with Google</span>
          </button>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <div className="empty-line-through"></div>
            <div className="text-muted px-2 fs-6 my-3">or</div>
            <div className="empty-line-through"></div>
          </div> */}
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirm_password: "",
            }}
            validate={(values) =>
              schemaValidator(
                values,
                currentMode === "signin" ? signInUser : signUpUser
              )
            }
            onSubmit={mutate}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                {currentMode !== "signin" && (
                  <>
                    <input
                      type="username"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      className="w-100 p-2 my-2 border border-secondary rounded-1"
                      placeholder="Username"
                    />
                    {touched.username && errors.username && (
                      <div className="error-message text-danger">
                        {errors.username}
                      </div>
                    )}
                  </>
                )}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="w-100 p-2 my-2 border border-secondary rounded-1"
                  placeholder="Email"
                />
                {touched.email && errors.email && (
                  <div className="error-message text-danger">
                    {errors.email}
                  </div>
                )}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="w-100 p-2 my-2 border border-secondary rounded-1"
                  placeholder="Password"
                />
                {touched.password && errors.password && (
                  <div className="error-message text-danger">
                    {errors.password}
                  </div>
                )}
                {currentMode !== "signin" && (
                  <>
                    <input
                      type="password"
                      name="confirm_password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirm_password}
                      className="w-100 p-2 my-2 border border-secondary rounded-1"
                      placeholder="Confirm Password"
                    />
                    {touched.confirm_password && errors.confirm_password && (
                      <div className="error-message text-danger">
                        {errors.confirm_password}
                      </div>
                    )}
                  </>
                )}
                {currentMode === "signin" && (
                  <>
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                      <button
                        type="submit"
                        className="btn p-md-2 btn-dark text-light px-3 col-9 col-md-4"
                      >
                        Sign In
                      </button>
                      <div className="d-none d-md-block text-muted text-center px-2 fs-6 my-3 col-1">
                        or
                      </div>
                      <button
                        onClick={() => dispatch(switchSignInOrUp("signup"))}
                        className="my-3 my-md-0 p-md-2 btn btn-light text-dark px-3 col-9 col-md-4"
                      >
                        Sign Up
                      </button>
                    </div>
                  </>
                )}
                {currentMode !== "signin" && (
                  <>
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                      <button
                        onClick={() => dispatch(switchSignInOrUp("signin"))}
                        className="btn p-md-2 btn-light text-dark px-3 col-9 col-md-4"
                      >
                        Sign In
                      </button>
                      <div className="d-none d-md-block text-muted text-center px-2 fs-6 my-3 col-1">
                        or
                      </div>
                      <button
                        type="submit"
                        className="my-3 my-md-0 p-md-2 btn btn-dark text-light px-3 col-9 col-md-4"
                      >
                        Sign Up
                      </button>
                    </div>
                  </>
                )}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
