import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/colorlogo.png";

function Nav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleNavLinkClick = () => {
    setIsNavCollapsed(true);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-uppercase text-center custom-header">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo_png" className="nav-logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavToggle}
            aria-controls="navbarNavDropdown"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Navbar items */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isNavCollapsed ? "collapse" : "show smooth-transition"
          }`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav custom-font">
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                aria-current="page"
                to="/"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="/about"
                onClick={handleNavLinkClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="/service"
                onClick={handleNavLinkClick}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="/training"
                onClick={handleNavLinkClick}
              >
                Training
              </Link>
            </li>
            {/* Dropdown menus */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                WorkShop
              </Link>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="servicesDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/prestige"
                    onClick={handleNavLinkClick}
                  >
                    Prestige College
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/xiaomi"
                    onClick={handleNavLinkClick}
                  >
                    Xiaomi MI Company
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/bentchair"
                    onClick={handleNavLinkClick}
                  >
                    Bentchair Company
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/rjit"
                    onClick={handleNavLinkClick}
                  >
                    Rjit College
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/mpct"
                    onClick={handleNavLinkClick}
                  >
                    Mpct College
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="contactDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Placement
              </Link>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="contactDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/placement_desk"
                    onClick={handleNavLinkClick}
                  >
                    Placement Desk
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/placement_gallery"
                    onClick={handleNavLinkClick}
                  >
                    Placement Gallery
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="eventsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </Link>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="eventsDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/birthday"
                    onClick={handleNavLinkClick}
                  >
                    Student's Birthday
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/aniversary"
                    onClick={handleNavLinkClick}
                  >
                    Anniversary Celebration
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/tour"
                    onClick={handleNavLinkClick}
                  >
                    Tours
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="/contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                target="_blank"
                className="btn btn-outline-info nav-link text-dark mb-2"
                to="https://www.pninfosys.in/"
              >
                Internship
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
