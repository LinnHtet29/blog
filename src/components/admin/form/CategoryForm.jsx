import { Formik } from "formik";
import React from "react";
import { useCategoryMutation } from "../../../hooks/useCategoryQuery";
import { createCategory } from "../../../validation/categoryValidator";
import schemaValidator from "../../../validation/schemaValidator";
import { useDispatch } from "react-redux";
import { setFormModal } from "../../../redux/features/system/modalStatusSlice";
import { addCategory } from "../../../services/category.service";
import { startLoading } from "../../../redux/features/system/loadingSlice";

export default function CategoryForm({ refetch }) {
  const dispatch = useDispatch();
  const { mutate } = useCategoryMutation(addCategory);
  const closeHandler = () => {
    dispatch(setFormModal(false));
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
        }}
        validate={(values) => schemaValidator(values, createCategory)}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(startLoading());
          mutate(values);
          setSubmitting(false);
          closeHandler();
          setTimeout(() => {
            refetch();
          }, 600);
        }}
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
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className="w-100 p-2 my-2 border border-secondary rounded-1"
              placeholder="Enter Name"
            />
            {touched.name && errors.name && (
              <div className="error-message text-danger">{errors.name}</div>
            )}
            <div className="d-flex justify-content-end gap-2">
              <button
                type="submit"
                className="my-3 my-md-0 btn btn-sm btn-primary text-light px-3 col-9 col-md-4"
              >
                Add
              </button>
              <button
                type="button"
                onClick={closeHandler}
                className="my-3 my-md-0 btn btn-sm btn-secondary text-light px-3 col-9 col-md-4"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
