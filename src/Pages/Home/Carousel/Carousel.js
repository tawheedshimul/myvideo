import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Carousel = () => {
  const carouselItemsRef = useRef(null);
  const carouselWidth = useRef(0);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedImageUrls = [
        'https://source.unsplash.com/random/241x320',
        'https://source.unsplash.com/random/242x320',
        'https://source.unsplash.com/random/243x320',
        'https://source.unsplash.com/random/244x320',
        'https://source.unsplash.com/random/245x320',
      ];
      setImageUrls(fetchedImageUrls);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const carouselItems = carouselItemsRef.current;
    carouselWidth.current = carouselItems.offsetWidth;

    let currentIndex = 0;
    let tl;

    const animateCarousel = () => {
      currentIndex = (currentIndex + 1) % carouselItems.children.length;
      tl.to(carouselItems, { x: -currentIndex * carouselWidth.current, duration: 0.8, ease: 'power3.inOut' });
    };

    tl = gsap.timeline();
    tl.set(carouselItems, { x: -currentIndex * carouselWidth.current });
    tl.call(animateCarousel);

    return () => {
      tl.kill();
    };
  }, [imageUrls]);

  return (
    <div className="w-400 h-200 overflow-hidden">
      <div className="flex" ref={carouselItemsRef}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="w-400 h-200">
            <img src={imageUrl} alt={`Image ${index}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
