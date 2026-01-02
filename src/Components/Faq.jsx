import React, { useState } from "react";
import "../assets/Styles/faq.css";

const faqs = [
  {
    q: "What types of winding machines do you manufacture?",
    a: "We manufacture automatic and semi-automatic winding machines for motor coils, transformers, capacitors, inductors, stators, rotors, and custom electrical components."
  },
  {
    q: "Do you provide machines for capacitor winding and assembly?",
    a: "Yes, we offer dedicated capacitor winding machines along with complete capacitor assembly, processing, and final testing solutions."
  },
  {
    q: "What processing machines are included in your solutions?",
    a: "Our processing machines include soldering, taping, cutting, lead forming, impregnation, and curing systems tailored to winding applications."
  },
  {
    q: "Do you offer electrical testing and final inspection machines?",
    a: "Yes, we provide insulation testing, high-voltage testing, continuity testing, resistance measurement, and final quality inspection machines."
  },
  {
    q: "Can you deliver a complete turnkey (trunky) solution?",
    a: "Absolutely. We provide end-to-end turnkey solutions including machine design, manufacturing, installation, operator training, and production setup."
  },
  {
    q: "Are your machines customizable based on product requirements?",
    a: "Yes, all our winding, processing, and testing machines can be customized according to wire size, turns, speed, accuracy, and production volume."
  },
  {
    q: "Do you provide installation and after-sales support?",
    a: "We provide complete installation support, commissioning, operator training, preventive maintenance, and ongoing technical assistance."
  },
  {
    q: "Are your machines compliant with industry quality standards?",
    a: "Our machines are designed to meet industrial safety, quality, and performance standards to ensure consistent and reliable production."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFaq(index)}
            >
              <span>{item.q}</span>
              <span className="arrow">
                {activeIndex === index ? "<" : ">"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
