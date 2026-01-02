import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/windingMissions.css";
import useScrollReveal from "../hooks/useScrollReveal";

const windingModels = [
  { id: "4321c", name: "4321c", img: "/images/windingmodels/4321c.JPG" },
  { id: "awm21", name: "AWM21", img: "/images/windingmodels/awm21-1.jpg" },
  { id: "SAWM", name: "SAWM", img: "/images/windingmodels/SAWM.jpg" },
  { id: "dcw125", name: "DCW125", img: "/images/windingmodels/DCW125.jpg" },
  { id: "ht", name: "HT", img: "/images/windingmodels/HT.jpg" },
  { id: "tcw150", name: "TCW150", img: "/images/windingmodels/TCW150.jpg" }
];

const WindingMissions = () => {
  const navigate = useNavigate();

  // scroll reveal hook
  useScrollReveal();

  return (
    <div className="winding-page">
      {/* TITLE */}
      <h2 className="reveal">Winding Missions</h2>

      {/* SUBTITLE */}
      <p className="winding-subtitle reveal">
        Precision winding missions designed for motor, fan, and transformer manufacturing.
      </p>

      {/* GRID */}
      <div className="winding-grid">
        {windingModels.map((model, index) => (
          <div
            key={model.id}
            className="winding-card reveal"
            style={{ "--i": index }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/products/winding/${model.id}`);
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

export default WindingMissions;
