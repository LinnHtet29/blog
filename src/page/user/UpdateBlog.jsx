import React from "react";
import BlogForm from "../../components/public/form/BlogForm";
import { useParams } from "react-router-dom";
import { useBlogQuery } from "../../hooks/useBlogQuery";
import { getBlogById } from "../../services/blog.service";

export default function UpdateBlog() {
  const { id } = useParams();
  const { data: blogData, isLoading } = useBlogQuery([id], () =>
    getBlogById(id)
  );
  return (
    <div className="bg-light mt-5 p-3">
      <BlogForm
        initialState={{
          title: blogData.data.blog.title,
          mainTitle: blogData.data.blog.mainTitle,
          content: blogData.data.blog.content,
          categoryList: blogData.data.blog.categoryList,
          urlList: blogData.data.blog.urlList,
        }}
      />
    </div>
  );
}
