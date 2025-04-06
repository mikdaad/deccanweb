import React, { useState } from "react";

interface ProductGalleryProps {
  mainImage: string;
  thumbnails: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  mainImage,
  thumbnails,
}) => {
  const [currentImage, setCurrentImage] = useState(mainImage);

  return (
    <div className="grow max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[30%] max-md:w-full max-md:ml-0">
          <div className="grow max-md:mt-[22px]">
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Product thumbnail ${index + 1}`}
                className={`aspect-[1.02] object-contain w-[205px] ${
                  index > 0 ? "mt-3" : ""
                } rounded-lg max-md:mr-[3px] cursor-pointer hover:opacity-90 transition-opacity`}
                onClick={() => setCurrentImage(thumbnail)}
              />
            ))}
          </div>
        </div>
        <div className="w-[70%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src={currentImage}
            alt="Main product image"
            className="aspect-[0.79] object-contain w-full grow rounded-lg max-md:max-w-full max-md:mt-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
