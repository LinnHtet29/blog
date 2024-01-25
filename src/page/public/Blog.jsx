import { Container, Image } from "react-bootstrap";
import BlogList from "../../components/public/blog/BlogList";
import { useEffect, useState } from "react";
import { useBlogQuery } from "../../hooks/useBlogQuery";
import LatestBlogArticle from "../../components/public/blog/LatestBlogArticle";
import { getAllBlogs } from "../../services/blog.service";

export default function Blog() {
  const {
    data: blogsData,
    isLoading,
    isError,
  } = useBlogQuery(["blogs"], () => getAllBlogs());
  const [latestBlog, setLatestBlog] = useState();

  useEffect(() => {
    if (blogsData) {
      setLatestBlog(blogsData.data.items.content[0]);
    }
  }, [blogsData, isLoading, isError]);

  return (
    <Container className="main">
      <section>
        {latestBlog && (
          <LatestBlogArticle
            urlList={latestBlog.urlList}
            title={latestBlog.title}
            mainTitle={latestBlog.mainTitle}
          />
        )}
      </section>
      {blogsData && (
        <BlogList blogs={blogsData && blogsData.data.items.content.slice(1)} />
      )}
    </Container>
  );
}
