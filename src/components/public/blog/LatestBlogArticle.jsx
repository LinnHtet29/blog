import React from "react";
import { Image } from "react-bootstrap";

export default function LatestBlogArticle({ urlList, title, mainTitle }) {
  return (
    <>
      <Image className="main-image" src={urlList && urlList[0]} fluid />
      <h1 className="text-center secondary-font fw-bold">{mainTitle}</h1>
      <h5 className="text-center fw-light mx-5 pb-3 border-bottom border-2 border-black typo-mono fs-6">
        {title}
      </h5>
    </>
  );
}
