import React from "react";
import { Row, Col } from "react-bootstrap";
import BlogArticle from "./BlogArticle";

export default function BlogList({ blogs }) {
  return (
    <section className="px-md-5">
      <h2 className="text-center secondary-font fw-bold my-5">All Articles</h2>
      <Row>
        {blogs &&
          blogs.map((blog) => {
            return (
              <Col key={blog._id} xs={12} md={6} className="mb-4 p-0">
                <BlogArticle title={blog.title} />
              </Col>
            );
          })}
      </Row>
    </section>
  );
}
