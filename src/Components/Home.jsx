import React from "react";
import "../assets/Styles/home.css";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Withus from "./Withus";
import useScrollReveal from "../hooks/useScrollReveal";
import Faq from "./Faq";
import MachineSlider from "./MachineSlider";

const Home = () => {
  useScrollReveal(); // activate scroll reveal

  return (
    <>
      {/* ================= HERO IMAGE SLIDER ================= */}
      <div className="home hero">
        {/* Image Slider */}
        <div className="hero-slider">
          <div className="hero-track">
            <img src="/images/hero1.jpeg" alt="Winding Machine 1" />
            <img src="/images/hero2.jpeg" alt="Winding Machine 2" />
            <img src="/images/hero3.jpeg" alt="Winding Machine 3" />
            <img src="/images/hero4.jpeg" alt="Winding Machine 4" />
            <img src="/images/hero5.jpeg" alt="Winding Machine 5" />
            <img src="/images/hero6.jpeg" alt="Winding Machine 6" />
            <img src="/images/hero7.jpeg" alt="Winding Machine 7" />
            <img src="/images/hero8.jpeg" alt="Winding Machine 8" />

            {/* duplicate images for smooth infinite loop */}
            <img src="/images/hero1.jpeg" alt="Winding Machine 1" />
            <img src="/images/hero2.jpeg" alt="Winding Machine 2" />
            <img src="/images/hero3.jpeg" alt="Winding Machine 3" />
            <img src="/images/hero4.jpeg" alt="Winding Machine 4" />
            <img src="/images/hero5.jpeg" alt="Winding Machine 5" />
            <img src="/images/hero6.jpeg" alt="Winding Machine 6" />
            <img src="/images/hero7.jpeg" alt="Winding Machine 7" />
            <img src="/images/hero8.jpeg" alt="Winding Machine 8" />

          </div>
        </div>

        {/* Overlay Content */}
        <div className="hero-overlay">
          <div className="home-content reveal">
            <h1>
              Powering precision winding solutions for a smarter electrical
              future.
            </h1>

            <p>
              Delivering reliable, high-quality motor winding services with
              engineering excellence and long-term performance.
            </p>
          </div>
        </div>
      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="reveal">
        <Products />
      </div>

      {/* ================= ABOUT ================= */}
      <div className="reveal">
        <AboutUs />
      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="cta-section reveal">
        <h2>Need a Custom Winding Solution?</h2>

        <p>
          Speak with our engineering team to design reliable, high-precision
          winding machines tailored to your manufacturing needs.
        </p>

        <a href="#contact" className="cta-btn">
          Request a Quote
        </a>
      </div>

      {/* ================= CONTACT ================= */}
      <div className="reveal">
        <Withus />
      </div>

      {/* ================= MACHINES SLIDER ================= */}
      <MachineSlider />

      {/* ================= FAQ ================= */}
      <div className="faq">
        <Faq />
      </div>
    </>
  );
};

export default Home;
