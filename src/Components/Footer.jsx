import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaPhone
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* ===== TOP FOOTER ===== */}
      <section className="bg-light border-top py-5">
        <div className="container">

          {/* HEADER ROW */}
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <h3 className="fw-semibold mb-2">
                We are here to help you
              </h3>
              <p className="text-muted mb-0">
                Reach out for product inquiries, service support, or technical assistance
              </p>
            </div>

            <div className="col-md-6 d-flex justify-content-md-end align-items-center gap-4 mt-3 mt-md-0">
              {/* PHONE */}
              <div className="d-flex align-items-center gap-2">
                <FaPhone className="text-primary fs-5" />
                <span className="fw-medium">+91 98453 42737</span>
              </div>

              {/* SOCIAL */}
              <div className="d-flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark fs-5"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark fs-5"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark fs-5"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* LINKS GRID */}
          <div className="row gy-4">
            <div className="col-6 col-md-3">
              <h6 className="fw-semibold mb-3">Company</h6>
              <ul className="list-unstyled text-muted small">
                <li>About Us</li>
                <li>Products</li>
                <li>Industries</li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h6 className="fw-semibold mb-3">Support</h6>
              <ul className="list-unstyled text-muted small">
                <li>Contact Us</li>
                <li>Help Center</li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h6 className="fw-semibold mb-3">Solutions</h6>
              <ul className="list-unstyled text-muted small">
                <li>Winding Machines</li>
                <li>Testing Machines</li>
                <li>Processing Machines</li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h6 className="fw-semibold mb-3">Resources</h6>
              <ul className="list-unstyled text-muted small">
                <li>Downloads</li>
                <li>Documentation</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM FOOTER ===== */}
      <footer className="bg-dark text-light py-3">
        <div className="container text-center">
          <small>
            © {new Date().getFullYear()}{" "}
            <strong>Globanics Winding Technologies Pvt. Ltd</strong> | Powered by{" "}
            <span className="text-primary">Verbinden</span>
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
