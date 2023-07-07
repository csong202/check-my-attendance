import {
  faBars,
  faShekelSign,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist/index.js";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) setButton(false);
    else setButton(true);
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Check My Attendance
          <FontAwesomeIcon className="fa-shekel-sign" icon={faShekelSign} />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon
            icon={click ? faTimes : faBars}
            className={click ? "fas fa-times" : "fas fa-bars"}
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item button">
            <Link
              to="/sign-in"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle={"btn--outline"}>SIGN IN</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
