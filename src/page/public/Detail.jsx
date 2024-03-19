import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  Row,
  Col,
  Button,
  InputGroup,
Carousel,
} from "react-bootstrap";
import BlogArticle from "../../components/public/blog/BlogArticle";
import eyeSvg from "../../assets/images/eye.svg";
import SignUpForm from "../../components/public/form/SignUpForm";
import { useBlogQuery } from "../../hooks/useBlogQuery";
import { getAllBlogs, getBlogById } from "../../services/blog.service";
import { useParams } from "react-router-dom";
import { formatDateString } from "../../utils/Formatter/DateFormatter";
import defaultProfileImage from "../../assets/images/default_image.png";

export default function Detail() {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const [query, setQuery] = useState({
    skip: 1,
    limit: 6,
    sortBy: "createdAt",
    order: -1,
    title: "",
    categoryName: "",
    status: "",
  });

  const buildQueryString = (query) => {
    const { skip, limit, sortBy, order, title, categoryName, status } = query;
    return `?skip=${skip}&limit=${limit}&sortBy=${sortBy}&order=${order}&title=${title}&categoryName=${categoryName}&status=${status}`;
  };

  const { data: blogData, isLoading } = useBlogQuery([id], () =>
    getBlogById(id)
  );

  const { data: blogsData, isLoading: isBlogsDataLoading } = useBlogQuery(
    [query],
    () => getAllBlogs(buildQueryString(query))
  );

  useEffect(() => {
    setQuery({ ...query, skip: currentPage });
  }, [currentPage]);

  const totalPages = blogsData
    ? Math.ceil(blogsData.data.items.totalCount / query.limit)
    : 0;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {!isLoading && (
        <>
          <Container className="main pt-5">
        <section className="mb-3">
<>
                {!isLoading && (
                  <Carousel className="px-5">
                    {blogData.data.blog.urlList.map((image) => (
                      <Carousel.Item>
                        <div className="carousel-img-container d-flex">
                          <Image
                            src={image}
                            className="w-100 main-image object-fit-cover"
                            fluid
                          />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                )}
              </>
          <h1 className="text-center secondary-font fw-bold mt-5 mt-md-0 p-2 p-md-0">
            {blogData.data.blog.mainTitle}
          </h1>
          <h5 className="text-center fw-light mx-2 mx-md-5 pb-3 typo-mono fs-6">
            {blogData.data.blog.title}
          </h5>
                  </section>
        <section className="border-top border-2 border-black mx-3 mx-md-5 pt-3">
          <Row>
            <img
              className="profileImage"
              src={defaultProfileImage}
              alt="profile"
            />
            <Col>
              <Row>
                <h3 className="secondary-font fw-bold text-uppercase">
                  {blogData.data.blog.creator.username}
                </h3>
                <h6>
                      {formatDateString(blogData.data.blog.createdAt)} · 4 min
                      read
                    </h6>
              </Row>
            </Col>
            <Col className="d-none d-md-block">
              <div>
                <InputGroup className="mb-3 justify-content-md-end">
                  <Button
                    variant="white shadow-sm col-6 col-md-auto"
                    id="facebook-btn"
                  >
                    <img
                      width={40}
                      height={40}
                      src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
                      alt="facebook icon"
                    />
                  </Button>
                  <Button
                    variant="white shadow-sm col-6 col-md-auto"
                    id="twitter-btn"
                  >
                    <img
                      width={40}
                      height={40}
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                      alt="twitter icon"
                    />
                  </Button>
                </InputGroup>
              </div>
            </Col>
            <InputGroup className="mb-3 d-md-none">
              <Button
                className="col-4"
                variant="white shadow-sm"
                id="facebook-btn"
              >
                <div>
                  <img
                    width={25}
                    height={25}
                    src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
                    alt="facebook icon"
                  />
                </div>
              </Button>
              <Button
                className="col-4"
                variant="white shadow-sm"
                id="twitter-btn"
              >
                <div>
                  <img
                    width={25}
                    height={25}
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                    alt="twitter icon"
                  />
                </div>
              </Button>
              <Button
                className="col-4"
                variant="white shadow-sm"
                id="twitter-btn"
              >
                <div>
                  <img
                    width={25}
                    height={25}
                    src="https://w7.pngwing.com/pngs/31/144/png-transparent-wechat-computer-icons-logo-others-miscellaneous-face-monochrome.png"
                    alt="twitter icon"
                  />
                </div>
              </Button>
            </InputGroup>
          </Row>
          <p className="my-3 my-md-5">{blogData.data.blog.content}</p>
          {/* <h3 className="my-3">Next on the pipeline</h3>
          <p className="my-3 my-md-5">
            Duis eu velit tempus erat egestas efficitur. In hac habitasse
                platea dictumst. Fusce a nunc eget ligula suscipit finibus.
                Aenean pharetra quis lacus at viverra. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Morbi efficitur auctor metus, id mollis lorem
                pellentesque id. Nullam posuere maximus dui et fringilla.
          </p> */}
              {/* <Image
            className="main-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8ppBbBwlLcRH77XoSQueqttyvZVMXt8Wa6WpuwyyidgDlz1_0m-RZ5XHviZwE9NwJL0&usqp=CAU"
            fluid
          /> */}
              {/* <p className="text-center fs-6 px-1 px-md-5">
            Image caption centered this way and I'll make this a bit longer
                to indicate the amount of line-height.
          </p> */}
              {/* <div
            className="my-5"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          /> */}
          <InputGroup className="mb-3 px-5 d-none d-md-block">
            <Button
              className="col-6"
              variant="white shadow-sm"
              id="facebook-btn"
            >
              <div>
                <img
                  width={30}
                  height={30}
                  src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
                  alt="facebook icon"
                />
                <span>Share on facebook</span>
              </div>
            </Button>
            <Button
              className="col-6"
              variant="white shadow-sm"
              id="twitter-btn"
            >
              <div>
                <img
                  width={30}
                  height={30}
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                  alt="twitter icon"
                />
                <span>Share on twitter</span>
              </div>
            </Button>
          </InputGroup>
          <p className="d-md-none">Share : </p>
          <InputGroup className="mb-3 d-md-none">
            <Button
              className="col-4"
              variant="white shadow-sm"
              id="facebook-btn"
            >
              <div>
                <img
                  width={25}
                  height={25}
                  src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
                  alt="facebook icon"
                />
              </div>
            </Button>
            <Button
              className="col-4"
              variant="white shadow-sm"
              id="twitter-btn"
            >
              <div>
                <img
                  width={25}
                  height={25}
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                  alt="twitter icon"
                />
              </div>
            </Button>
            <Button
              className="col-4"
              variant="white shadow-sm"
              id="twitter-btn"
            >
              <div>
                <img
                  width={25}
                  height={25}
                  src="https://w7.pngwing.com/pngs/31/144/png-transparent-wechat-computer-icons-logo-others-miscellaneous-face-monochrome.png"
                  alt="twitter icon"
                />
              </div>
            </Button>
          </InputGroup>
          <p className="p-2 border-bottom-dot">
                Tags:{" "}
                {blogData.data.blog.categoryList.map((cate) => (
                  <span className="bg-dark text-white px-2 py-1 mx-2 rounded-1">
                    {cate.name}
                  </span>
                ))}
              </p>
          <Row>
            <img
              className="profileImage"
              src={defaultProfileImage}
              alt="profile"
            />
            <Col>
              <p>
                <b>{blogData.data.blog.creator.username}</b> is a Design
                    Founder & Advisor, Berlin School of Creative Leadership
                    Executive MBA participant, Zippie advisor, Wolt co-founder,
                    and Nordic Rose stakeholder.
              </p>
            </Col>
          </Row>
        </section>
      </Container>
      <Container
        fluid
        className="border-top border-2 border-dark position-relative mt-5"
      >
        <Image
          src={eyeSvg}
          alt="eye"
          className="position-absolute translate-middle start-50"
        />
        <section className="container">
          <h2 className="text-center my-5 pt-3 secondary-font">
            What to read next
          </h2>
          <Row className="my-5">
            {!isBlogsDataLoading &&
                  blogsData.data.items.content.map((blog) => (
              <Col xs={12} md={4}>
                <BlogArticle
                  key={blog._id}
                        urlList={blog.urlList}
                  title={blog.title}
                        id={blog._id}
                />
              </Col>
            ))}
          </Row>
<div className="w-75 mx-auto d-flex justify-content-center gap-3 mb-5">
                <button
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                  className="btn btn-outline-dark rounded-pill"
                >
                  First
                </button>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="btn btn-outline-dark rounded-pill"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    key={index}
                    className={
                      currentPage !== index + 1
                        ? "btn btn-outline-dark rounded-pill px-3"
                        : "btn btn-sm btn-dark px-3"
                    }
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="btn btn-outline-dark rounded-pill"
                >
                  Next
                </button>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                  className="btn btn-outline-dark rounded-pill"
                >
                  Last
                </button>
              </div>
        </section>
        <SignUpForm />
      </Container>
    </>
)}
    </>
  );
}
