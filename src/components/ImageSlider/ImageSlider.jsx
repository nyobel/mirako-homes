import { useState } from "react";
import "./ImageSlider.css";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <div className="main-image">
        <FaLessThan onClick={prevImage} className="slider-icon previous"/>
        <img
          src={images[currentImageIndex].url}
          alt={images[currentImageIndex].alt}
        />
        <FaGreaterThan onClick={nextImage} className="slider-icon next"/> 
      </div>
      <div className="thumbnail-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className={index === currentImageIndex ? "active" : ""}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
