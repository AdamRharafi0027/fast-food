import { useState, useEffect } from "react";
import "./UpButton.css";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();
const UpButton = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth", // Smooth scrolling
      top: 0,
    });
  };
  return (
    <>
      {display && (
        <button className="buttonUp" onClick={scrollToTop}>
          <i className="bi bi-arrow-up-short"></i>
        </button>
      )}
    </>
  );
};

export default UpButton;
