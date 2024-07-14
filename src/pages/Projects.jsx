import React, { useEffect, useState } from "react";
import { Navigation, Autoplay, EffectCards } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../assets/css/projects.css";
import Card from "../components/Card";
import $cardData from "../components/card_data";

const Projects = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  console.log(screenSize.width)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const slidesPerView = screenSize.width <= 767 ? 1 : screenSize.width <= 1023 ? 2 : 3;

  return (
    <div className="projects-container">
      <div className="projects-page-title">
        <h4>My Recent Projects</h4>
      </div>
      <div className="projects-slides">
        <Swiper
          className="swiper-slider"
          spaceBetween={50}
          modules={[Navigation, EffectCards, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={slidesPerView}
          loop="true"
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {$cardData.map((card, index) => {
            return (
              <SwiperSlide className="slides" key={index}>
                <Card
                  cardImage={card.cardImage}
                  cardTitle={card.cardTitle}
                  cardSkill={card.cardSkill}
                  cardBody={card.cardBody}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
