import React, { useState, useEffect } from "react";
import img_hero from "../../assets/img_hero.png";
import img_hero2 from "../../assets/img_hero2.png";
import img_hero3 from "../../assets/img_hero3.png";

const slides = [
  {
    id: 1,
    image: img_hero,
    caption: "Slide 1",
  },
  {
    id: 2,
    image: img_hero2,
    caption: "Slide 2",
  },
  {
    id: 3,
    image: img_hero3,
    caption: "Slide 3",
  },
];

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative h-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="w-auto drop-shadow-4xl mx-auto h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
export default SlideShow;
