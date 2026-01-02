import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../assets/Styles/machinesSlider.css";
const machines = [
  { img: "/images/windingmodels/4321c.JPG", },
  { img: "/images/windingmodels/awm21-1.jpg",  },
  { img: "/images/windingmodels/DCW125.jpg",  },
  { img: "/images/windingmodels/HT.jpg",  },
  { img: "/images/windingmodels/TCW150.jpg",  },
  { img: "/images/processing/AssyMachine.jpg",  },
  { img: "/images/processing/BRM100.jpg",  },
  { img: "/images/processing/SBM2018.jpg",  },
  { img: "/images/testing/LETSIM-20240222-WA036.jpg",  },
  { img: "/images/testing/RBTS100.jpg",  },
  { img: "/images/testing/RETS100DSC_1540.jpg",  },
  { img: "/images/testing/RETS250Img.jpg",  },
  { img: "/images/processing/DrillingIMG-20240216-WA0075.jpg",  },
  { img: "/images/processing/SolderingMachine.jpg",  },
  { img: "/images/processing/TP320.jpg",  },
  { img: "/images/processing/Vacuum+HeatingChamber.jpg",  },
  { img: "/images/finaltest/AssemblyFrontView.jpg",  },
  { img: "/images/finaltest/DP20.JPG",  },
  { img: "/images/finaltest/P100.JPG",  },
];

const MachinesSlider = () => {
  return (
    <section className="machines-section">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={60}
        slidesPerView={3}
        loop
        navigation
        autoplay={{
          delay: 400,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {machines.map((machine, index) => (
          <SwiperSlide key={index}>
            <div className="machine-slide">
              <img src={machine.img} alt="machine" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MachinesSlider;