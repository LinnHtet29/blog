import React from "react";
import { Image } from "react-bootstrap";

export default function Article({ image, title }) {
  console.log("title", title);
  return (
    <>
      <Image className="article-image" src={image} fluid />
      <p className="typo-title fs-6 text-center">{title}</p>
    </>
  );
}
