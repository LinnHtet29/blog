import React from "react";
import { formatDateString } from "../../../utils/Formatter/DateFormatter";
import { Image } from "react-bootstrap";
import DefaultProfileImage from "../../../assets/images/default_image.png";

export default function BlogTable({ blogs }) {
  console.log(blogs);
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
    <div
      className="w-100 bg-white border border-1 border-end border-secondary border-opacity-25 rounded-2 overflow-y-auto overflow-x-hidden"
      style={{ maxHeight: "68vh" }}
    >
      <table className="data-table table table-borderless">
        <thead className="data-table-header ">
          <tr>
            <th>Creator</th>
            <th>Blog Title</th>
            <th>Date In</th>
            <th>Category</th>
            <th>Status</th>
            <th>Updater</th>
            <th className="text-nowrap">Updated In</th>
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
                <span>
                  {blog.updater ? blog.updater.username : blog.creator.username}
                </span>
              </td>
              <td>{formatDateString(blog.updatedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
