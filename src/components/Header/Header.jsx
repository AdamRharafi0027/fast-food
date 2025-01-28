import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleMenuToggle = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      {/* HEADER */}
      <header className="container d-flex pt-3 pb-3 justify-content-between align-items-center">
        {/* LOGO */}
        <h1 className="logo">Fast Food</h1>

        {/* NAVIGATION */}
        <nav className={`nav-bar ${isNavActive ? "active" : ""}`}>
          <ul className="d-flex gap-5 justify-content-between align-items-center">
            <li>
              <Link
                className='link'
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setIsNavActive(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className='link'
                to="menu"
                smooth={true}
                duration={500}
                onClick={() => setIsNavActive(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                className='link'
                to="why"
                smooth={true}
                duration={500}
                onClick={() => setIsNavActive(false)}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                className='link'
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsNavActive(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* ICONS AND TOGGLE BUTTON */}
        <div className="items d-flex justify-content-center align-items-center gap-3">
          <i className="bi bi-bag-fill fs-2 bag"></i>
          <div
            className={`nav-icon nav-icon d-flex justify-content-center align-items-center flex-column gap-2 ${isNavActive ? "active" : ""}`}
            onClick={handleMenuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
