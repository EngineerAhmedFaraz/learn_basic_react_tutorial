import React from "react";
import ImageCard from "../component/ImageCard";

export const Blog = () => {
  const imageUrl =
    "https://4kwallpapers.com/images/wallpapers/coder-amoled-black-7680x4326-13668.png";
  const altText = "I am good coder";
  return (
    <>
      <div>
        <h1>Image Card</h1>
        <ImageCard imageUrl={imageUrl} altText={altText} />
      </div>
    </>
  );
};
