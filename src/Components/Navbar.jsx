import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`navbar navbar-expand-lg fixed-top transition-all ${
  scrolled ? "bg-transparent" : "bg-light bg-opacity-75"
}`}


    >
      <div className="container-fluid px-4 px-lg-5">
        {/* BRAND */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
  src="data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 300'>
  <style>
    .logo-text {
      font-family: Montserrat, Poppins, Arial Black, Arial, sans-serif;
      font-weight: 800;
      font-size: 200px;
      fill: %234b2ca3;
      letter-spacing: 4px;
    }
  </style>
  <text x='70' y='215' class='logo-text'>GL</text>
  <text x='340' y='215' font-size='180'>🌍</text>
  <text x='560' y='215' class='logo-text'>BONIC&apos;S</text>
</svg>"
  alt="Globonics Logo"
  width="100%"
  height="42"
/>

          
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <NavLink className="nav-link fw-medium" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-medium" to="/products">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-medium" to="/about">
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-medium" to="/contact">
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-medium" to="/support-services">
                Support & Services
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
