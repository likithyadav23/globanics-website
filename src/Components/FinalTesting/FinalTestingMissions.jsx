import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Styles/windingMissions.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const finalTestingModels = [
  {
    id: "caft25",
    name: "Capacitor Assembly & Final Testing Machine (CAFT 25)",
    img: "/images/finaltest/AssemblyFrontView.jpg"
  },
  {
    id: "p25ds",
    name: "Dual Station Finished Capacitor Testing System (P 25DS)",
    img: "/images/finaltest/DP20.JPG"
  },
  {
    id: "FBCTS50",
    name: "Finished Capacitor Testing System (FBCTS-50)",
    img: "/images/finaltest/DSC_0736.JPG"
  },
  {
    id: "p100",
    name: "Finished Capacitor Testing System (P 100)",
    img: "/images/finaltest/P100.JPG"
  }
];

const FinalTestingMissions = () => {
  const navigate = useNavigate();
  useScrollReveal();

  return (
    <div className="winding-page">
      <h2 className="reveal">Final Testing Missions</h2>

      <p className="winding-subtitle reveal">
        High-accuracy finished capacitor testing systems ensuring reliability,
        safety, and compliance with electrical standards.
      </p>

      <div className="winding-grid">
        {finalTestingModels.map((model, index) => (
          <div
            key={model.id}
            className="winding-card reveal"
            style={{ "--i": index }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/products/final-testing/${model.id}`);
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

export default FinalTestingMissions;
