import React from "react";
import { Image } from "react-bootstrap";

export default function BlogArticle({ urlList, title }) {
  return (
    <>
      <Image className="article-image" src={urlList && urlList[0]} fluid />
      <p className="typo-title fs-6 text-center">{title}</p>
    </>
  );
}
