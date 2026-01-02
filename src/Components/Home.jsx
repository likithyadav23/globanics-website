import React from "react";
import "../assets/Styles/home.css";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Withus from "./Withus";
import useScrollReveal from "../hooks/useScrollReveal";
import Faq from "./Faq";
import MachineSlider from "./MachineSlider";

const Home = () => {
  useScrollReveal(); //  activate scroll reveal

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="home hero">
        <video
          className="hero-video"
          src="/videos/home.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

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
      <MachineSlider/>

      <div className="faq">
        <Faq/>
      </div>
    </>
  );
};

export default Home;
