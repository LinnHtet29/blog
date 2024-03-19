import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useBlogMutation, useBlogQuery } from "../../hooks/useBlogQuery";
import { NavLink, useParams } from "react-router-dom";
import { deleteBlog, getBlogById } from "../../services/blog.service";
import { useDispatch } from "react-redux";
import { setConfirmationModal } from "../../redux/features/system/modalStatusSlice";

export default function BlogDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: blogData, isLoading } = useBlogQuery([id], () =>
    getBlogById(id)
  );

  const { mutate } = useBlogMutation(deleteBlog);

  const setDeleteConModal = () => {
    dispatch(
      setConfirmationModal({
        isOpen: true,
        message: "You want to delete!",
        subFn: () => mutate(id),
      })
    );
  };
  return (
    <>
      {!isLoading && (
        <div className="bg-light mt-5 p-5">
          <div className="d-flex flex-wrap gap-3 justify-content-between">
            <div className="col-5 d-flex justify-content-between">
              <span className="col-5 logo fw-bold">Title</span>
              <span className="col-5 logo fw-bold">
                {blogData.data.blog.title}
              </span>
            </div>
            <div className="col-5 d-flex justify-content-between">
              <span className="col-5 logo fw-bold">Main Title</span>
              <span className="col-5 logo fw-bold">
                {blogData.data.blog.mainTitle}
              </span>
            </div>
            <div className="col-5 d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between logo fw-bold">
                <span className="col-5 logo fw-bold">Category</span>
                <div className="col-5 d-flex  flex-rowflex-wrap justify-content-center align-content-start col-5 logo fw-bold">
                  {blogData.data.blog.categoryList.map((cate) => (
                    <span
                      className="bg-warning text-white rounded p-1 m-1"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {cate.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-5">
                <NavLink
                  to={`/user/update_blog/${blogData.data.blog._id}`}
                  className="w-100 btn btn-warning rounded text-white mb-3"
                >
                  Update
                </NavLink>
                <button
                  onClick={setDeleteConModal}
                  className="w-100 btn btn-danger rounded text-white"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-between">
              <span className="col-4 logo fw-bold">Content</span>
              <textarea
                className="col-8 bg-white p-2"
                name=""
                id=""
                cols="30"
                rows="10"
                value={blogData.data.blog.content}
                disabled
              ></textarea>
            </div>
          </div>
          <hr className="border border-1 border-dark my-4" />
          <Row className="px-3">
            {blogData.data.blog.urlList.map((image) => {
              return (
                <Col key={image} xs={12} md={6} className="mb-4 p-0">
                  <img className="article-image" src={image} alt="Blog" />
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </>
  );
}
