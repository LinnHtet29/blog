import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { createBlog } from "../../../validation/blogValidator";
import schemaValidator from "../../../validation/schemaValidator";
import { useBlogMutation } from "../../../hooks/useBlogQuery";
import Select from "react-select";
import { useCategoryQuery } from "../../../hooks/useCategoryQuery";
import { getAllCategories } from "../../../services/category.service";
import ImageUploading from "react-images-uploading";
import { InlineIcon } from "@iconify/react";
import { addBlog, updateBlog } from "../../../services/blog.service";
import { useParams } from "react-router-dom";

export default function BlogForm({ initialState }) {
  const { id } = useParams();
  const { mutate } = useBlogMutation(initialState ? updateBlog : addBlog);
  const { data: categoryListOptions, isLoading } = useCategoryQuery(
    ["categoryList"],
    () => getAllCategories()
  );
  const [images, setImages] = useState(
    initialState
      ? initialState.urlList.map((url) => ({ data_url: url, file: {} }))
      : []
  );

  const options =
    !isLoading &&
    categoryListOptions.data.items.content.map((cateOpn) => {
      return {
        value: cateOpn.name,
        label: cateOpn.name,
      };
    });

  const initialValues = {
    title: initialState ? initialState.title : "",
    mainTitle: initialState ? initialState.mainTitle : "",
    content: initialState ? initialState.content : "",
    categoryList: initialState
      ? initialState.categoryList.map((cate) => {
          return {
            value: cate.name,
            label: cate.name,
          };
        })
      : [],
    urlList: initialState ? initialState.urlList : [],
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => schemaValidator(values, createBlog)}
        onSubmit={(values) => {
          const cates = values.categoryList.map((cate) => cate.value);
          values = { ...values, categoryList: cates };
          const imageUrls = images.map((image) => image.data_url);
          values.urlList = imageUrls;
          initialState ? mutate(id, values) : mutate(values);
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
          <Form className="d-flex px-5 gap-5" onSubmit={handleSubmit}>
            <div className="w-100 d-flex flex-column">
              <div className="w-100 mb-3">
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  className="w-100 p-2 my-2 border border-secondary rounded-1"
                  placeholder="Title"
                />
                {touched.title && errors.title && (
                  <div className="error-message text-danger">
                    {errors.title}
                  </div>
                )}
              </div>
              <div className="w-100 h-100 mb-3 position-relative">
                <ImageUploading
                  multiple
                  value={images}
                  onChange={(imageList, addUpdateIndex) => {
                    setImages(imageList);
                  }}
                  maxNumber={5}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    <div className="upload__image-wrapper">
                      <div
                        className="border border-1 border-dark rounded-2 position-absolute d-flex justify-content-center gap-2 align-items-center top-0 start-0 w-100 h-100 opacity-25"
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <InlineIcon
                          icon={"mdi:upload"}
                          color="black"
                          width={25}
                          height={25}
                        />
                        <span>Click or Drag an image</span>
                      </div>
                      &nbsp;
                      <div onClick={onImageRemoveAll}>
                        <InlineIcon
                          icon={"uil:"}
                          color="black"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className="w-100 position-absolute top-0 start-0 p-2 d-flex justify-content-start flex-wrap">
                        {imageList.map((image, index) => (
                          <div
                            key={index}
                            className="image-item col-4 position-relative"
                          >
                            <img
                              className="rounded-2"
                              src={image.data_url}
                              alt=""
                              width="100"
                            />
                            <div className="image-item__btn-wrapper position-absolute top-0 end-50">
                              <span
                                className="btn btn-sm btn-light rounded-circle"
                                onClick={() => onImageUpdate(index)}
                              >
                                <InlineIcon
                                  icon={"mdi:image-edit"}
                                  color="black"
                                  width={15}
                                  height={15}
                                />
                              </span>
                              <span
                                className="btn btn-sm btn-light rounded-circle"
                                onClick={() => onImageRemove(index)}
                              >
                                <InlineIcon
                                  icon={"uil:times"}
                                  color="black"
                                  width={15}
                                  height={15}
                                />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </ImageUploading>
              </div>
            </div>
            <div className="w-100 d-flex flex-column justify-content-between">
              <div className="w-100 mb-3">
                <input
                  type="text"
                  name="mainTitle"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mainTitle}
                  className="w-100 p-2 my-2 border border-secondary rounded-1"
                  placeholder="Main Title"
                />
                {touched.mainTitle && errors.mainTitle && (
                  <div className="error-message text-danger">
                    {errors.mainTitle}
                  </div>
                )}
              </div>
              <div className="w-100 mb-3">
                <Field name="categoryList">
                  {({ field }) => (
                    <>
                      <Select
                        {...field}
                        isMulti
                        value={values.categoryList}
                        options={options}
                        onChange={(value) =>
                          handleChange({
                            target: { name: "categoryList", value },
                          })
                        }
                        onBlur={() => handleBlur("categoryList")}
                      />
                      {touched.categoryList && errors.categoryList && (
                        <div className="error-message text-danger">
                          {errors.categoryList}
                        </div>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div className="w-100 mb-3">
                <textarea
                  type="text"
                  name="content"
                  rows="8"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.content}
                  className="w-100 p-2 my-2 border border-secondary rounded-1"
                  placeholder="Content"
                />
                {touched.content && errors.content && (
                  <div className="error-message text-danger">
                    {errors.content}
                  </div>
                )}
              </div>
              <button
                type="submit"
                onClick={() => console.log("CLICK")}
                className="w-100 btn btn-primary"
              >
                {id ? "Update" : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
