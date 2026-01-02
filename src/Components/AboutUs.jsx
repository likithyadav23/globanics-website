import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

import {
  FaIndustry,
  FaCalendarAlt,
  FaFileInvoice,
  FaCogs,
  FaHandshake,
  FaAward
} from "react-icons/fa";

const AboutUs = () => {
  useScrollReveal();
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* TITLE */}
        <h2 className="text-center fw-bold mb-3">About Us</h2>
        <div
          className="mx-auto mb-4"
          style={{
            width: "70px",
            height: "4px",
            backgroundColor: "#2563eb",
            borderRadius: "2px"
          }}
        ></div>

        {/* INTRO DESCRIPTION */}
        <p
          className="text-center text-muted mb-5 mx-auto"
          style={{ maxWidth: "950px", lineHeight: "1.8" }}
        >
          <strong>Globanics Winding Technologies Pvt. Ltd.</strong> is a
          specialized manufacturer of high-precision capacitor winding,
          processing, and testing machines. We design and deliver reliable,
          production-ready solutions for capacitor manufacturers across power
          factor correction, power electronics, and industrial electrical
          applications.
        </p>

        {/* INFO CARDS */}
        <div className="row g-4 justify-content-center mb-5">
          <div className="col-md-4">
            <div className="border rounded-3 h-100 p-4 bg-white text-center">
              <div className="mb-3 text-primary fs-2">
                <FaIndustry />
              </div>
              <p className="text-uppercase text-muted small mb-1">
                Nature of Business
              </p>
              <h5 className="fw-semibold">Manufacturer</h5>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded-3 h-100 p-4 bg-white text-center">
              <div className="mb-3 text-primary fs-2">
                <FaCalendarAlt />
              </div>
              <p className="text-uppercase text-muted small mb-1">
                Established
              </p>
              <h5 className="fw-semibold">01 July 2017</h5>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded-3 h-100 p-4 bg-white text-center">
              <div className="mb-3 text-primary fs-2">
                <FaFileInvoice />
              </div>
              <p className="text-uppercase text-muted small mb-1">
                GST Number
              </p>
              <h5 className="fw-semibold">29AAOFG9979J2Z6</h5>
            </div>
          </div>
        </div>

        {/* WHY GLOBANICS */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white border rounded-3 h-100">
              <FaCogs className="text-primary fs-3 mb-3" />
              <h5 className="fw-semibold mb-2">Engineering Excellence</h5>
              <p className="text-muted mb-0">
                Our machines are engineered for accuracy, durability, and
                continuous industrial operation with advanced automation and
                control systems.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-white border rounded-3 h-100">
              <FaHandshake className="text-primary fs-3 mb-3" />
              <h5 className="fw-semibold mb-2">Customer-Focused Approach</h5>
              <p className="text-muted mb-0">
                We work closely with customers to deliver customized solutions,
                ensuring long-term performance, service support, and value.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-white border rounded-3 h-100">
              <FaAward className="text-primary fs-3 mb-3" />
              <h5 className="fw-semibold mb-2">Quality & Reliability</h5>
              <p className="text-muted mb-0">
                Every machine is built with strict quality standards, ensuring
                consistent output, reduced downtime, and long service life.
              </p>
            </div>
          </div>
        </div>

        {/* FOOT NOTE */}
        <p
          className="text-center text-muted mt-5 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          With continuous innovation and industry expertise, Globanics remains a
          trusted partner for capacitor manufacturing solutions across India and
          global markets.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
