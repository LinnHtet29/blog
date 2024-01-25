import React, { useEffect, useState } from "react";
import { useBlogQuery } from "../../hooks/useBlogQuery";
import { getAllBlogs } from "../../services/blog.service";
import BlogTable from "../../components/admin/table/BlogTable";
import FilterOption from "../../components/admin/table/FilterOption";
import { useSelector, useDispatch } from "react-redux";
import { setBlogFilters } from "../../redux/features/filters/blogFilterSlice";

export default function BlogList() {
  //   const [query, setQuery] = useState({
  //     skip: 1,
  //     limit: 5,
  //     sortBy: "createdAt",
  //     order: -1,
  //     username: "",
  //     email: "",
  //     phoneNumber: "",
  //     role: "",
  //     status: "",
  //     description: "",
  //   });
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    skip: 1,
    limit: 5,
    sortBy: "createdAt",
    order: -1,
    title: "",
    categoryName: "",
    status: "",
  });

  //   const query = useSelector((state) => state.blogFilter);
  //   console.log(query);
  //   const setQuery = (query) => {
  //     dispatch(setBlogFilters({ ...query }));
  //   };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await getAllBlogs(buildQueryString(query));
  //       } catch (error) {}
  //     };

  //     fetchData();
  //   }, [query]);

  //   const {
  //     data: blogsData,
  //     isLoading: isBlogLoading,
  //     isError: isBlogError,
  //   } = useBlogQuery(["blogs", query], () =>
  //     getAllBlogs(buildQueryString(query))
  //   );

  //   const buildQueryString = (query) => {
  //     const {
  //       skip,
  //       limit,
  //       sortBy,
  //       order,
  //       username,
  //       email,
  //       phoneNumber,
  //       role,
  //       status,
  //       description,
  //     } = query;

  //     return `?skip=${skip}&limit=${limit}&sortBy=${sortBy}&order=${order}&username=${username}&email=${email}&phoneNumber=${phoneNumber}&role=${role}&status=${status}&description=${description}`;
  //   };

  const buildQueryString = (query) => {
    const { skip, limit, sortBy, order, title, categoryName, status } = query;

    // return `?skip=${skip}&limit=${limit}&sortBy=${sortBy}&order=${order}&username=${username}&email=${email}&phoneNumber=${phoneNumber}&role=${role}&status=${status}&description=${description}`;
    return `?skip=${skip}&limit=${limit}&sortBy=${sortBy}&order=${order}&title=${title}&categoryName=${categoryName}&status=${status}`;
  };
  return (
    <div>
      <div className="position-relative py-5">
        <FilterOption
          rows={[5, 10, 25, 100]}
          // data={blogsData.data.blogs}
          query={query}
          setQuery={setQuery}
          fetchQueryFn={useBlogQuery}
          getFn={getAllBlogs}
          buildQueryFn={buildQueryString}
          Table={BlogTable}
        />
        {/* <BlogTable blogs={blogsData.data.blogs} /> */}
      </div>
    </div>
  );
}
