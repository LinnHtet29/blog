import React from "react";
import { Image } from "react-bootstrap";
import DefaultProfileImage from "../../../assets/images/default_image.png";
import { formatDateString } from "../../../utils/Formatter/DateFormatter";

export default function BlogStatusTable({ blogs }) {
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

  return (
    <div className="w-100 h-100 bg-white border border-1 border-end border-secondary border-opacity-25 rounded-2 overflow-y-auto overflow-x-hidden">
      <table className="table table-borderless">
        <thead className="border border-1 border-bottom border-secondary border-opacity-25">
          <tr>
            <th>
              <h5>Blog Status</h5>
            </th>
          </tr>
          <tr>
            <th>User</th>
            <th>Blog Title</th>
            <th>Date In</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {blogs.content.map((blog) => (
            <tr key={blog._id}>
              <td className="d-flex justify-content-start align-items-center gap-2">
                <div>
                  <Image
                    className="rounded-2"
                    src={DefaultProfileImage}
                    width={30}
                    height={30}
                    alt="User Profile"
                  />
                </div>
                <span>{blog.creator.username}</span>
              </td>
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
              <td className={getStatusClassName(blog.status)}>{blog.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
