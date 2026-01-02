import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

import {
  FaTools,
  FaCogs,
  FaChalkboardTeacher,
  FaIndustry,
  FaShieldAlt,
  FaClipboardCheck,
  FaSyncAlt,
  FaHeadset,
  FaProjectDiagram
} from "react-icons/fa";

const Support_services = () => {
  return (
    <div className="container py-5">
      {/* ===== TITLE ===== */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Support & Services</h2>
        <p className="text-muted mt-2">
          Complete technical support and lifecycle services for Globanics
          special purpose machines.
        </p>
      </div>

      {/* ===== SERVICES GRID ===== */}
      <div className="row g-4">
        {/* Installation */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <FaIndustry className="fs-2 text-primary mb-3" />
              <h5 className="fw-semibold">Installation & Commissioning</h5>
              <p className="text-muted small">
                Complete on-site installation, commissioning, and handover
                ensuring machines are production-ready.
              </p>
            </div>
          </div>
        </div>

        {/* Training */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <FaChalkboardTeacher className="fs-2 text-primary mb-3" />
              <h5 className="fw-semibold">Operator Training</h5>
              <p className="text-muted small">
                Practical training covering machine operation, safety,
                maintenance, and troubleshooting.
              </p>
            </div>
          </div>
        </div>

        {/* Preventive Maintenance */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <FaCogs className="fs-2 text-primary mb-3" />
              <h5 className="fw-semibold">Preventive Maintenance</h5>
              <p className="text-muted small">
                Scheduled maintenance programs to improve reliability and
                minimize unplanned downtime.
              </p>
            </div>
          </div>
        </div>

        {/* Breakdown Support */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <FaTools className="fs-2 text-primary mb-3" />
              <h5 className="fw-semibold">Breakdown Support</h5>
              <p className="text-muted small">
                Fast-response technical support through remote diagnostics or
                on-site service.
              </p>
            </div>
          </div>
        </div>

        {/* Calibration */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <FaClipboardCheck className="fs-2 text-primary mb-3" />
              <h5 className="fw-semibold">Calibration & Testing Support</h5>
              <p className="text-muted small">
                Assistance for capacitance, Tan-Delta, IR, BDV, HV and final
                testing accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* Safety */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <FaShieldAlt className="fs-2 text-primary mb-3" />
              <h5 className="fw-semibold">Safety & Compliance</h5>
              <p className="text-muted small">
                Support for safety interlocks, sensors, light curtains and
                statutory compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Spares */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <FaSyncAlt className="fs-2 text-primary mb-3" />
              <h5 className="fw-semibold">Spares & Consumables</h5>
              <p className="text-muted small">
                Supply of genuine spares and consumables to ensure uninterrupted
                production.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Assistance */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <FaHeadset className="fs-2 text-primary mb-3" />
              <h5 className="fw-semibold">Technical Assistance</h5>
              <p className="text-muted small">
                Continuous process optimization, CSV data logging and
                performance improvement support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TURNKEY PROJECTS ===== */}
      <div className="mt-5">
        <div className="text-center mb-4">
          <FaProjectDiagram className="fs-1 text-primary mb-3" />
          <h3 className="fw-bold">Turnkey Projects</h3>
          <p className="text-muted">
            Complete end-to-end capacitor manufacturing solutions under a single
            point of responsibility.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">✔ End-to-end project planning</li>
              <li className="list-group-item">✔ Machine selection & line balancing</li>
              <li className="list-group-item">✔ Plant layout & workflow design</li>
              <li className="list-group-item">✔ Electrical & control integration</li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                ✔ Integration of winding, processing & testing machines
              </li>
              <li className="list-group-item">✔ Trial production & validation</li>
              <li className="list-group-item">✔ Operator training & documentation</li>
              <li className="list-group-item">
                ✔ Single-point accountability till production start
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="text-center mt-5">
        <p className="fw-medium mb-3">
          Need service support or a complete turnkey solution?
        </p>
        <a href="/contact" className="btn btn-primary px-4 py-2">
          Contact Our Support Team
        </a>
      </div>
    </div>
  );
};

export default Support_services;
