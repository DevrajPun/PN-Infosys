import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const collapseRef = useRef(null);

  useEffect(() => {
    const handleLinkClick = () => {
      if (collapseRef.current.classList.contains("show")) {
        collapseRef.current.classList.remove("show");
      }
    };

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
    };
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/logo%2Fcolorlogo.png?alt=media&amp;token=0386f0aa-e1e1-4950-924f-3eedaa82d967"
              alt="Logo"
              className="img-fluid img-size"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            ref={collapseRef}
          >
            <ul className="navbar-nav ml-auto text-center text-uppercase">
              <li className="nav-item dark">
                <Link className="nav-link text-dark" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dark">
                <Link className="nav-link text-dark" to="/about">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item dark">
                <Link className="nav-link text-dark" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item dark">
                <Link className="nav-link text-dark" to="/training">
                  Training
                </Link>
              </li>
              <li className="nav-item dropdown dark">
                <Link
                  className="nav-link dropdown-toggle text-dark"
                  to="/workshop"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WorkShop
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item dark" to="/prestige">
                      Prestige College
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item dark" to="/xiaomi">
                      Xiaomi MI Company
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item dark" to="/bentchair">
                      Bentchair Company
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item dark" to="/rjit">
                      Rjit College
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item dark" to="/mpct">
                      Mpct College
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown dark">
                <Link
                  className="nav-link dropdown-toggle text-dark"
                  to="/placement"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Placement
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item dark" to="/placement_desk">
                      Placement Desk
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item dark"
                      to="/placement_gallery"
                    >
                      Placement Gallery
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown dark">
                <Link
                  className="nav-link dropdown-toggle text-dark"
                  to="/events"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item dark" to="/birthday">
                      Student's Birthday
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item dark" to="/aniversary">
                      Aniversary Celebration
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item dark" to="/tour">
                      Tour's
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dark">
                <Link className="nav-link text-dark" to="/contact">
                  ContactUs
                </Link>
              </li>
              <li className="nav-item dark">
                <Link
                  target="_blank"
                  to="https://www.pninfosys.in/"
                  className="btn btn-outline-info nav-link text-dark"
                >
                  Internship
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
