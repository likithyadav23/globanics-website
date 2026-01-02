import React from "react";
import { useParams } from "react-router-dom";
import "../../assets/Styles/windingModelDetails.css";
import useScrollReveal from "../../hooks/useScrollReveal";


/* ================= PROCESSING MODEL DATA ================= */
/* ================= PROCESSING MODEL DATA ================= */
const models = {
  assembly: {
    name: "Automatic / Semi-Automatic Capacitor Assembly Machine",
    img: "/images/processing/AssyMachine.jpg",
    pdf: "/pdfs/processing/assembly.pdf",
    overview:
      "Capacitor assembly machines are designed for assembling finished capacitor elements into cans with high accuracy, durability, and repeatability. These machines support resin filling, level checking, top case pressing, and safe ejection, ensuring consistent quality and high productivity in capacitor manufacturing lines.",

    features: [
      "Rotary CAM indexing system for precise positioning",
      "Automatic CAN loading with presence & orientation check",
      "Resin filling and resin level verification",
      "Top case pressing with change parts for different CAN sizes",
      "Motorized buffer conveyor for assembled capacitors",
      "Operator safety interlocks with light curtain & door sensors"
    ],

    configurations: [
      "Semi-Automatic Assembly",
      "Fully Automatic Assembly",
      "Custom CAN Diameter & Length Support"
    ]
  },

  brm100: {
    name: "BRM 100 – Automatic Inline Surface Brushing & Core Reaming Machine",
    img: "/images/processing/BRM100.jpg",
    pdf: "/pdfs/processing/brm100.pdf",
    overview:
      "BRM 100 is an automatic inline machine designed for simultaneous surface brushing and core reaming of capacitor elements. It ensures complete electrical isolation, accurate core preparation, and high-speed processing without change parts.",

    features: [
      "Automatic element feeding through vibrator with speed control",
      "Double reaming / sticker removing heads",
      "Surface clearing & adjustable core reaming depth",
      "Quick change-over for different element sizes",
      "Provision for dust collection and safety guards",
      "High productivity with continuous inline operation"
    ],

    configurations: [
      "Single Inline Station",
      "Dual Head Configuration",
      "Custom Element Size Support"
    ]
  },

  drilling: {
    name: "Automatic Core Drilling / Reaming Machine",
    img: "/images/processing/DrillingIMG-20240216-WA0075.jpg",
    pdf: "/pdfs/processing/drilling.pdf",
    overview:
      "Automatic core drilling and reaming machines are used to precisely drill or ream capacitor element cores with uniform depth and diameter. These machines ensure consistent electrical contact and high throughput.",

    features: [
      "Automatic element feeding through vibrator",
      "Precise core drilling and reaming depth control",
      "Quick size change-over facility",
      "Rigid and compact machine structure",
      "Dust collection provision for clean operation"
    ],

    configurations: [
      "Single Reaming Head",
      "Dual Reaming Head",
      "Manual or Automatic Feed"
    ]
  },

  sbm2018: {
    name: "SBM 2018 – Surface Brushing Machine",
    img: "/images/processing/SBM2018.jpg",
    pdf: "/pdfs/processing/sbm2018.pdf",
    overview:
      "SBM series surface brushing machines are designed to uniformly clean capacitor element surfaces after metallization. They improve electrical contact quality and enhance capacitor reliability.",

    features: [
      "Automatic surface brushing with controlled depth",
      "High-speed operation for mass production",
      "Compact and rugged mechanical structure",
      "Uniform brushing finish on capacitor surfaces",
      "Low maintenance design"
    ],

    configurations: [
      "Single-Side Brushing",
      "Full Surface Brushing",
      "Custom Element Size Support"
    ]
  },

  soldering: {
    name: "Automatic Capacitor Wire Soldering Machine",
    img: "/images/processing/SolderingMachine.jpg",
    pdf: "/pdfs/processing/soldering.pdf",
    overview:
      "Automatic wire soldering machines are used for precise soldering of capacitor element wires on both sides. They ensure accurate wire cutting, stripping, positioning, and high-quality solder joints.",

    features: [
      "Both-side automatic wire soldering",
      "Automatic wire cutting and stripping",
      "Precision soldering guns for consistent joints",
      "Vibrator / hopper blow feeder for element feeding",
      "Compact and ergonomic enclosed design",
      "Automatic soft ejection of finished elements"
    ],

    configurations: [
      "Single Station",
      "Dual Position Rotary Type",
      "Custom Wire Length Support"
    ]
  },

  tp320: {
    name: "TP 320 – Thermal Press Machine",
    img: "/images/processing/TP320.jpg",
    pdf: "/pdfs/processing/tp320.pdf",
    overview:
      "TP 320 thermal press machines are used for controlled heating and pressing of capacitor elements. They ensure uniform pressure, temperature stability, and reliable capacitor shape formation.",

    features: [
      "Digital temperature controller with uniform heating",
      "Hydraulic pressing system up to high pressure",
      "PLC & HMI controlled automatic sequence",
      "Safety interlocks for doors, oil level, and temperature",
      "Multiple pressing plates and tray support"
    ],

    configurations: [
      "Single Tray Pressing",
      "Multi-Tray Pressing",
      "Custom Plate Size Support"
    ]
  },

  vacuum: {
    name: "Vacuum Heating Chamber (VCH Series)",
    img: "/images/processing/Vacuum+HeatingChamber.jpg",
    pdf: "/pdfs/processing/vacuum.pdf",
    overview:
      "Vacuum heating chambers are used for drying, impregnation, and thermal processing of capacitor elements under controlled vacuum and temperature conditions.",

    features: [
      "Automatic vacuum and heating cycles",
      "High vacuum capability up to micron level",
      "Uniform temperature distribution inside chamber",
      "PLC controlled operation with safety interlocks",
      "Stainless steel vacuum chamber construction"
    ],

    configurations: [
      "Batch Processing",
      "Horizontal Chamber",
      "Custom Chamber Dimensions"
    ]
  },

  xy: {
    name: "XY Spray Gun Manipulator System",
    img: "/images/processing/xy Manu 6.jpg",
    pdf: "/pdfs/processing/xy.pdf",
    overview:
      "XY spray gun manipulator systems are designed for precise zinc metal spraying on capacitor elements. The programmable X-Y movement ensures uniform coating and high repeatability.",

    features: [
      "Programmable X-Y axis movement",
      "AC variable frequency drive for uniform coating",
      "High precision screw rod & nut mechanism",
      "Dust protection bellows for long life",
      "Compact control panel with speed adjustment"
    ],

    configurations: [
      "Manual Program Mode",
      "Automatic Program Mode",
      "Custom Spray Area Size"
    ]
  }
};


/* ================= COMPONENT ================= */
const ProcessingModelDetails = () => {
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

export default ProcessingModelDetails;
