import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
    }, 2000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount

  }, []);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const renderSlides = () => {
    const slideImages = [
      "https://th.bing.com/th/id/OIP.jsiaZlS4s12vrcDW1HuDgAHaEK?w=328&h=184&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.njVmRCyEj6YPgLM0IZ69TQHaEK?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/R.c33896539d68913f3b5c39eec9897501?rik=7YrE2mlL5%2fSLVg&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.BWSlr_ZUcCyGyV60tUCFlAHaEo?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/OIP._Hd0L2_05UjNetnWkWdaegHaD4?pid=ImgDet&rs=1",
    ];

    return slideImages.map((image, index) => (
      <div
        key={index}
        className={`${
          activeSlide === index ? "block" : "hidden"
        } duration-700 ease-in-out`}
        data-carousel-item
      >
        <img
          src={image}
          className="absolute block w-full h-full object-cover object-center"
          alt={`Slide ${index + 1}`}
        />
      </div>
    ));
  };

  const renderIndicators = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <button
        key={index}
        type="button"
        className={`w-3 h-3 rounded-full ${
          activeSlide === index ? "bg-white" : "bg-gray-500"
        }`}
        aria-current={activeSlide === index}
        aria-label={`Slide ${index + 1}`}
        data-carousel-slide-to={index}
        onClick={() => handleSlideChange(index)}
      ></button>
    ));
  };

  const handlePrevClick = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setActiveSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative aspect-w-2 aspect-h-1 md:aspect-h-2 overflow-hidden md:h-96">
        {renderSlides()}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {renderIndicators()}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        {/* Previous button icon */}
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        {/* Next button icon */}
      </button>
    </div>
  );
};

export default Carousel;
