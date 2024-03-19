import * as Yup from "yup";

const baseBlogSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(5, "Title must be at least 5 characters"),
  mainTitle: Yup.string().required("Main title is required"),
  content: Yup.string().required("Content is required"),
  categoryList: Yup.array()
    .min(1)
    .required("At least one category is required"),
  urlList: Yup.array(),
});

export const createBlog = baseBlogSchema;
