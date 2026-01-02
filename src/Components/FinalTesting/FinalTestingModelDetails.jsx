import React from "react";
import { useParams } from "react-router-dom";
import "../../assets/Styles/windingModelDetails.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const models = {
  caft25: {
    name: "Capacitor Assembly & Final Testing Machine (CAFT 25)",
    img: "/images/finaltest/AssemblyFrontView.jpg",
    pdf: "/pdfs/finaltesting/CAFT25.pdf",
    overview:
      "CAFT 25 is an integrated capacitor assembly and final testing machine using a rotary CAM indexing system with automated resin filling, testing, and robotic binning.",
    features: [
      "Rotary CAM indexing system",
      "Automatic CAN loading & resin filling",
      "AC LV, AC HV, capacitance & Tan-Delta testing",
      "Robotic sorting & conveyor system",
      "CSV test data logging",
      "No change parts for CAN diameter"
    ],
    configurations: [
      "Wire Type Capacitor",
      "Inline Assembly & Testing Line"
    ]
  },

  p25ds: {
    name: "Dual Station Finished Capacitor Testing System (P 25DS)",
    img: "/images/finaltest/DP20.JPG",
    pdf: "/pdfs/finaltesting/P25DS.pdf",
    overview:
      "High-speed dual-station finished capacitor testing system designed for parallel testing and automatic binning.",
    features: [
      "Dual rotary CAM stations",
      "AC HV testing up to 1000V",
      "Automatic discharge & binning",
      "CSV data logging",
      "Light curtain safety"
    ],
    configurations: [
      "Dual Output Testing",
      "High-Speed Production"
    ]
  },

  FBCTS50: {
    name: "Finished Capacitor Testing System (FBCTS-50)",
    img: "/images/finaltest/DSC_0736.JPG",
    pdf: "/pdfs/finaltesting/FCBTS50.pdf",
    overview:
      "A 100 performs AC HV, DC Hipot, IR, BDV, capacitance testing with automated sorting for wire and terminal capacitors.",
    features: [
      "AC & DC Hipot up to 5KV",
      "Capacitance up to 100µF",
      "Automatic reject binning",
      "Optional conveyor"
    ],
    configurations: [
      "Wire Type",
      "Terminal Type"
    ]
  },

  p100: {
    name: "Finished Capacitor Testing System (P 100)",
    img: "/images/finaltest/P100.JPG",
    pdf: "/pdfs/finaltesting/P100.pdf",
    overview:
      "P 100 supports AC HV, Tan-Delta, BDV, IR, and capacitance testing with high accuracy for production environments.",
    features: [
      "Capacitance testing up to 100µF",
      "Tan-Delta measurement",
      "Automatic discharge & binning",
      "CSV reports"
    ],
    configurations: [
      "Single Value Testing",
      "Production Line Integration"
    ]
  }
};

const FinalTestingModelDetails = () => {
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
            {model.features.map((f, i) => (
              <li key={i} className="reveal">{f}</li>
            ))}
          </ul>

          <h3 className="reveal">Configurations</h3>
          <ul className="config-list">
            {model.configurations.map((c, i) => (
              <li key={i} className="reveal">{c}</li>
            ))}
          </ul>

          <a className="pdf-btn reveal" href={model.pdf} target="_blank" rel="noreferrer">
            View / Download Brochure (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinalTestingModelDetails;
