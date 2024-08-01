import React from "react";

const ImageCard = ({ imageUrl, altText }) => {
  return (
    <>
      <div className="image-card">
        <img
          src={imageUrl}
          alt={altText}
          style={{ maxWidth: "100%", height: "400px" }}
        />
      </div>
    </>
  );
};

export default ImageCard;
