import { useState, useEffect } from "react";
import { items } from "../data/Items";


export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  // Move to next slide
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  // Autoplay with interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, [current]); // depend on current for smoother update

  return (
    <div className="w-full h-full overflow-hidden">
      {/* Slide container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={src.image}
              alt={`Slide ${index}`}
              className="w-full md:h-100 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}