import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Styles/windingModelDetails.css";
import useScrollReveal from "../../hooks/useScrollReveal";


const processingModels = [
  {
    id: "assembly",
    name: "Capacitor Assembly Machine",
    img: "/images/processing/AssyMachine.jpg"
  },
  {
    id: "brm100",
    name: "Automatic Brushing & Core Reaming (BRM 100)",
    img: "/images/processing/BRM100.jpg"
  },
  {
    id: "drilling",
    name: "Drilling Machine",
    img: "/images/processing/DrillingIMG-20240216-WA0075.jpg"
  },
  {
    id: "sbm2018",
    name: "Surface Brushing Machine (SBM 2018)",
    img: "/images/processing/SBM2018.jpg"
  },
  {
    id: "soldering",
    name: "Manual Soldering Machine",
    img: "/images/processing/SolderingMachine.jpg"
  },
  {
    id: "tp320",
    name: "Thermal Press (TP 320)",
    img: "/images/processing/TP320.jpg"
  },
  {
    id: "vacuum",
    name: "Vacuum Heating Chamber",
    img: "/images/processing/Vacuum+HeatingChamber.jpg"
  },
  {
    id: "xy",
    name: "XY Manual Machine",
    img: "/images/processing/xy Manu 6.jpg"
  }
];

const ProcessingMissions = () => {
  const navigate = useNavigate();
  useScrollReveal();

  return (
    <div className="winding-page">
      <h2 className="reveal">Processing Machines</h2>

      <p className="winding-subtitle reveal">
        Advanced capacitor processing machines designed for precision,
        consistency, and high-volume production.
      </p>

      <div className="winding-grid">
        {processingModels.map((model, index) => (
          <div
            key={model.id}
            className="winding-card reveal"
            style={{ "--i": index }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/products/processing/${model.id}`);
            }}
          >
            <img src={model.img} alt={model.name} />
            <h3>{model.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessingMissions;
