import { useState } from "react";
import Icon from "./Icon";

type SliderProps = {
  imageUrls: string[];
};

const Silder = ({ imageUrls }: SliderProps) => {
  const imageURlsLength = imageUrls.length;
  const [imageIndex, setImageIndex] = useState(0);

  const changeSlide = (direction: string) => {
    if (direction === "LEFT") {
      if (imageIndex === 0) {
      } else {
        setImageIndex((prev) => prev - 1);
      }
    }

    if (direction === "RIGHT") {
      if (imageIndex === imageURlsLength - 1) {
        return;
      } else {
        setImageIndex((prev) => prev + 1);
      }
    }
  };
  return (
    <div className="relative">
      {imageIndex !== 0 ? (
        <div
          className="absolute left-1 top-1/2 bg-white rounded-full p-1 shadow-sm"
          onClick={() => changeSlide("LEFT")}
        >
          <Icon name="ArrowLeft" size={16} />
        </div>
      ) : null}
      <div className="h-96 w-full overflow-hidden">
        <img
          src={imageUrls[imageIndex]}
          alt="image-review"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {imageIndex < imageURlsLength - 1 ? (
        <div
          className="absolute right-1 top-1/2 bg-white rounded-full p-1 shadow-sm"
          onClick={() => changeSlide("RIGHT")}
        >
          <Icon name="ArrowRight" size={16} />
        </div>
      ) : null}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 ">
        <div className="flex-center gap-2">
          {Array.from({ length: imageURlsLength }).map((_, index) => {
            const isActive = index === imageIndex;
            return (
              <div
                key={`image-review-${index}`}
                className={`h-2 w-2 rounded-full ${
                  isActive ? "bg-primary-600" : "bg-white"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Silder;
