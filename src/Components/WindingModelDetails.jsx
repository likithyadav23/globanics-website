import React from "react";
import { useParams } from "react-router-dom";
import "../assets/Styles/windingModelDetails.css";
import useScrollReveal from "../hooks/useScrollReveal";

/* ================= MODEL DATA ================= */
const models = {
  "4321c": {
    name: "AWM 4321C",
    img: "/images/windingmodels/4321c.JPG",
    pdf: "/pdfs/4321c.pdf",
    overview:
      "AWM 4321C is a smart automatic capacitor winding machine designed for small value capacitors used in power factor correction and power electronics applications. It offers high productivity with multi-element winding capability.",
    features: [
      "Automatic winding for small value capacitors with core",
      "Supports 4 / 3 / 2 / 1 element winding per cycle",
      "High-speed winding for mass production",
      "Electronic tension control for uniform film tension",
      "De-metallization facility at initial & final turns",
      "Robust welded steel structure",
      "3-position indexing for continuous operation",
      "Quick locking reel system"
    ],
    configurations: [
      "Single Element Winding",
      "Multi-Element Winding (up to 4 elements)"
    ]
  },

  "awm21": {
    name: "AWM 125",
    img: "/images/windingmodels/awm21-1.jpg",
    pdf: "/pdfs/awm125.pdf",
    overview:
      "AWM 125 is designed for medium-size capacitors with core, ensuring durability, accuracy, and consistent production quality.",
    features: [
      "Capacitor OD support up to 125mm",
      "5 Hex core (optional 13 Hex)",
      "Electronic tension control",
      "Calculated capacitance turns",
      "3-position indexing",
      "Quick locking reel system"
    ],
    configurations: [
      "Single Value Winding",
      "Normal Capacitor Winding"
    ]
  },

  "SAWM": {
    name: "SAWM Series (Core-Less)",
    img: "/images/windingmodels/SAWM.jpg",
    pdf: "/pdfs/SAWM.pdf",
    overview:
      "SAWM machines are smart automatic split-pin winding machines designed for core-less capacitor elements with high speed and sealing accuracy.",
    features: [
      "High-speed core-less winding",
      "Inner & outer sealing facility",
      "Electronic tension control",
      "Pre-press unit during ejection",
      "De-metallization facility",
      "Robust mechanical structure"
    ],
    configurations: [
      "Single Winding Mode",
      "Dual Winding Mode"
    ]
  },

  "dcw125": {
    name: "DCW 125",
    img: "/images/windingmodels/DCW125.jpg",
    pdf: "/pdfs/DCW125.pdf",
    overview:
      "DCW 125 is a dual concentric capacitor winding machine for large capacitors with high precision and continuous operation.",
    features: [
      "Dual concentric winding",
      "Supports OD up to 125mm",
      "Electronic tension control",
      "Common pressure roller unit",
      "Calculated capacitance turns",
      "3-position indexing"
    ],
    configurations: [
      "Single Value Winding",
      "DCW (Dual Concentric Winding)"
    ]
  },

  "ht": {
    name: "HT 450A",
    img: "/images/windingmodels/HT.jpg",
    pdf: "/pdfs/HT.pdf",
    overview:
      "HT 450A is a high-voltage capacitor winding machine with integrated testing, data logging, and high-speed precision winding.",
    features: [
      "Automatic high-voltage winding",
      "Capacitance & Tan-Delta measurement",
      "Auto threading & unloading",
      "Servo-driven web control",
      "Soft unloading conveyor",
      "Minimal manual handling"
    ],
    configurations: [
      "2-Layer Winding",
      "3-Layer Winding"
    ]
  },

  "tcw150": {
    name: "TCW 150",
    img: "/images/windingmodels/TCW150.jpg",
    pdf: "/pdfs/TCW150.pdf",
    overview:
      "TCW 150 is a triple concentric capacitor winding machine supporting Star and Delta configurations for large capacitor manufacturing.",
    features: [
      "Dual & triple concentric winding",
      "Star / Delta configuration",
      "OD support up to 150mm",
      "Electronic tension control",
      "De-metallization facility",
      "Robust welded steel structure",
      "Calculated capacitance turns"
    ],
    configurations: [
      "Single Value Winding",
      "DCW (Dual Concentric)",
      "TCW (Triple Concentric – Star / Delta)"
    ]
  }
};

/* ================= COMPONENT ================= */
const WindingModelDetails = () => {
  useScrollReveal(); // ✅ correct hook usage

  const { modelId } = useParams();
  const model = models[modelId];

  if (!model) {
    return <h2 style={{ padding: "100px" }}>Model Not Found</h2>;
  }

  return (
    <div className="model-page">
      <h2 className="reveal">{model.name}</h2>

      <div className="model-content">
        {/* IMAGE */}
        <div className="model-image reveal">
          <img src={model.img} alt={model.name} />
        </div>

        {/* INFO */}
        <div className="model-info">
          <p className="model-overview reveal">{model.overview}</p>

          <h3 className="reveal">Key Features</h3>
          <ul className="feature-list">
            {model.features.map((item, i) => (
              <li key={i} className="reveal" style={{ "--i": i }}>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="reveal">Winding Configurations</h3>
          <ul className="config-list">
            {model.configurations.map((c, i) => (
              <li key={i} className="reveal" style={{ "--i": i }}>
                {c}
              </li>
            ))}
          </ul>

          <a
            className="pdf-btn reveal"
            href={model.pdf}
            target="_blank"
            rel="noreferrer"
          >
            View / Download Brochure (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default WindingModelDetails;
