import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 mb-25 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Scroll to top"
        >
          <KeyboardArrowUpIcon className="text-2xl" />
        </button>
      )}
    </>
  );
}