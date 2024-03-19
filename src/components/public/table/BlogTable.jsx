import React, { useEffect, useState } from "react";
import { formatDateString } from "../../../utils/Formatter/DateFormatter";
import router from "../../../routes";

export default function BlogTable({
  fetchQueryFn,
  getFn,
  query,
  buildQueryFn,
  setQuery,
}) {
  const { data } = fetchQueryFn([query], () => getFn(buildQueryFn(query)));
  const [currentPage, setCurrentPage] = useState(query.skip);
  console.log(data);
  const getStatusClassName = (status) => {
    switch (status) {
      case "APPROVED":
        return "approved-status";
      case "PENDING":
        return "pending-status";
      case "REJECTED":
        return "rejected-status";
      default:
        return "";
    }
  };
  const totalPages = data
    ? Math.ceil(data.data.items.totalCount / query.limit)
    : 0;
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const goToDetail = (id) => {
    router.navigate(`/user/blog/${id}`);
  };

  useEffect(() => {
    setQuery({
      ...query,
      skip: currentPage,
    });
  }, [currentPage]);
  return (
    <>
      {data && (
        <div className="w-100 pb-4 mb-4 bg-white border border-1 border-end border-secondary border-opacity-25 rounded-2 overflow-y-auto overflow-x-hidden">
          <div className="w-100 d-flex px-2 justify-content-between px-4 py-2">
            <h5>Blog List</h5>
            <h5>Total Number: {data.data.items.totalCount}</h5>
          </div>
          <table className="data-table table table-borderless mx-4">
            <thead className="data-table-header ">
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.data.items.content.map((blog) => (
                <tr
                  onClick={() => goToDetail(blog._id)}
                  key={blog._id}
                  style={{ cursor: "pointer" }}
                >
                  <td style={{ maxWidth: "200px" }}>{blog.title}</td>
                  <td>{formatDateString(blog.createdAt)}</td>
                  <td
                    className="d-flex flex-wrap"
                    style={{ maxWidth: "200px", fontSize: "0.7rem" }}
                  >
                    {blog.categoryList.map((cate) => (
                      <span
                        className="px-2 py-1 bg-info text-white rounded-2 m-1"
                        key={cate.name}
                      >
                        {cate.name}
                      </span>
                    ))}
                  </td>
                  <td className={getStatusClassName(blog.status)}>
                    {blog.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="input-group justify-content-center">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="btn btn-outline-primary"
            >
              First
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="btn btn-outline-primary"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                onClick={() => handlePageChange(index + 1)}
                key={index}
                className={
                  currentPage !== index + 1
                    ? "btn btn-outline-primary"
                    : "btn btn-primary"
                }
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="btn btn-outline-primary"
            >
              Next
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="btn btn-outline-primary"
            >
              Last
            </button>
          </div>
        </div>
      )}
    </>
  );
}
