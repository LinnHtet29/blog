import React from "react";
import PieChart from "../../components/admin/charts/PieChart";
import PieChartInfo from "../../components/admin/charts/PieChartInfo";
import BlogTable from "../../components/admin/table/BlogStatusTable";
import { useBlogQuery } from "../../hooks/useBlogQuery";
import { getAllBlogs, getAllBlogsDataCount } from "../../services/blog.service";

export default function Dashboard() {
  const {
    data: blogsCountData,
    isLoading: blogsCountLoading,
    isError: blogsCountError,
  } = useBlogQuery("blogsCountData", getAllBlogsDataCount);

  console.log("BLogCountData", blogsCountData);

  const {
    data: blogsData,
    isLoading: blogsLoading,
    isError: blogsError,
  } = useBlogQuery(["blogs?limit=3"], () => getAllBlogs("?limit=3"));

  return (
    <div className="overflow-auto">
      <div className="d-flex gap-5">
        <div className="w-100">
          <h6>Blog List</h6>
          {blogsCountData && <PieChart data={blogsCountData.data.blogData} />}
        </div>
        <div className="w-100">
          <h6>Blog Information</h6>
          {blogsCountData && (
            <PieChartInfo countData={blogsCountData.data.blogData} />
          )}
        </div>
      </div>
      {blogsData && <BlogTable blogs={blogsData.data.items} />}
    </div>
  );
}
