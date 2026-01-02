import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Styles/windingMissions.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const testingModels = [
  {
    id: "lets220",
    name: "Automatic Capacitor Testing System (LETS 220)",
    img: "/images/testing/LETSIM-20240222-WA036.jpg"
  },
  {
    id: "rbts150",
    name: "Rotary Brushing & Testing System (RBTS 150)",
    img: "/images/testing/RBTS100.jpg"
  },
  {
    id: "rets100",
    name: "Rotary Element Testing System (RETS 100)",
    img: "/images/testing/RETS100DSC_1540.jpg"
  },
  {
    id: "rets250",
    name: "Automatic Rotary Element Testing System (RETS 250)",
    img: "/images/testing/RETS250Img.jpg"
  }
];

const TestingMissions = () => {
  const navigate = useNavigate();
  useScrollReveal();

  return (
    <div className="winding-page">
      <h2 className="reveal">Testing Missions</h2>

      <p className="winding-subtitle reveal">
        Advanced capacitor testing systems ensuring electrical reliability,
        safety, and performance compliance.
      </p>

      <div className="winding-grid">
        {testingModels.map((model, index) => (
          <div
            key={model.id}
            className="winding-card reveal"
            style={{ "--i": index }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/products/testing/${model.id}`);
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

export default TestingMissions;
