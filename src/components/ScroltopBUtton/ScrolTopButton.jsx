"use client"// ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to show or hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); // Show button after scrolling down 300px
      } else {
        setIsVisible(false); // Hide button if scrolled up
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
