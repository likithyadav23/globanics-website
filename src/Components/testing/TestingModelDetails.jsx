import React from "react";
import { useParams } from "react-router-dom";
import "../../assets/Styles/windingModelDetails.css";
import useScrollReveal from "../../hooks/useScrollReveal";

/* ================= TESTING MODEL DATA ================= */
const models = {
  lets220: {
    name: "Automatic Capacitor Testing System (LETS 220)",
    img: "/images/testing/LETSIM-20240222-WA036.jpg",
    pdf: "/pdfs/testing/lets220.pdf",
    overview:
      "LETS 220 is a fully automatic capacitor testing system designed for high-speed electrical testing of capacitors, ensuring quality, safety, and compliance with industry standards.",

    features: [
      "Automatic capacitance measurement",
      "Tan-delta testing",
      "Insulation resistance measurement",
      "High voltage testing",
      "PLC & HMI based operation",
      "Data logging & report generation",
      "Operator safety enclosure"
    ],

    configurations: [
      "Single Line Testing",
      "Inline Conveyor Based Testing"
    ]
  },

  rbts150: {
    name: "Rotary Brushing & Testing System (RBTS 150)",
    img: "/images/testing/RBTS100.jpg",
    pdf: "/pdfs/testing/rbts150.pdf",
    overview:
      "RBTS 100 combines rotary surface brushing with electrical testing to ensure proper contact quality before final capacitor assembly.",

    features: [
      "Rotary surface brushing",
      "Integrated electrical testing",
      "High throughput operation",
      "Enclosed dust-free design",
      "Consistent contact quality"
    ],

    configurations: [
      "Single Station",
      "Inline Integration"
    ]
  },

  rets100: {
    name: "Rotary Element Testing System (RETS 100)",
    img: "/images/testing/RETS100DSC_1540.jpg",
    pdf: "/pdfs/testing/rets100.pdf",
    overview:
      "RETS 100 is designed for testing capacitor elements with high accuracy using a rotary indexing mechanism.",

    features: [
      "Rotary indexing table",
      "Capacitance & Tan-delta testing",
      "High measurement accuracy",
      "PLC controlled operation",
      "Compact design"
    ],

    configurations: [
      "Single Element Testing",
      "Batch Processing"
    ]
  },

  rets250: {
    name: "Automatic Rotary Element Testing System (RETS 250)",
    img: "/images/testing/RETS250Img.jpg",
    pdf: "/pdfs/testing/rets250.pdf",
    overview:
      "RETS 250 is a high-capacity automatic testing system for capacitor elements, suitable for mass production environments.",

    features: [
      "High-speed rotary testing",
      "Multiple electrical parameter checks",
      "Automatic loading & unloading",
      "HMI based monitoring",
      "Industrial safety standards"
    ],

    configurations: [
      "High Volume Production",
      "Customized Test Parameters"
    ]
  }
};

/* ================= COMPONENT ================= */
const TestingModelDetails = () => {
  useScrollReveal();

  const { modelId } = useParams();
  const model = models[modelId];

  if (!model) {
    return <h2 style={{ padding: "100px" }}>Model Not Found</h2>;
  }

  return (
    <div className="model-page">
      <h2 className="reveal">{model.name}</h2>

      <div className="model-content">
        <div className="model-image reveal">
          <img src={model.img} alt={model.name} />
        </div>

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

          <h3 className="reveal">Configurations</h3>
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

export default TestingModelDetails;
