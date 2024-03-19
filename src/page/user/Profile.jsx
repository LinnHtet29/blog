import React, { useState } from "react";
import UserInfo from "../../components/public/UserInfo";
import BlogTable from "../../components/public/table/BlogTable";
import { useBlogQuery } from "../../hooks/useBlogQuery";
import { getAllBlogs } from "../../services/blog.service";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [query, setQuery] = useState({
    skip: 1,
    limit: 5,
    sortBy: "createdAt",
    order: -1,
    creator: userInfo._id,
  });

  const buildQueryString = (query) => {
    const { skip, limit, sortBy, order, creator } = query;
    return `?skip=${skip}&limit=${limit}&sortBy=${sortBy}&order=${order}&creator=${creator}`;
  };

  return (
    <div className="mt-5 pt-5" style={{ minHeight: "100vh" }}>
      <UserInfo />
      <div className="d-flex justify-content-end p-5">
        <NavLink to="/user/create_blog" className="btn btn-warning fw-bold">
          Create Blog
        </NavLink>
      </div>
      <div className="px-5">
        <BlogTable
          fetchQueryFn={useBlogQuery}
          getFn={getAllBlogs}
          query={query}
          buildQueryFn={buildQueryString}
          setQuery={setQuery}
        />
      </div>
    </div>
  );
}
