import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const MainSwiper = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Example threshold for small screens
    };

    // Add event listener to listen for resize events
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SliderContainer>
      <Swiper
        cssMode={false}
        navigation={true}
        pagination={true}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="img" src={isSmallScreen ? img1 : img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src={isSmallScreen ? img3 : img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src={isSmallScreen ? img2 : img2} alt="" />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};

export default MainSwiper;

const SliderContainer = styled.div`
  margin-top: 0px;

  .swiper {
    width: 100vw;
    height: 79vh;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide .img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    ${'' /* object-fit: cover;   */}
  }

  .mySwiper {
    width: 100%;
    height: 79vh;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: white;
    font-size: 25px;
  }

  .swiper-wrapper {
    max-height: 79vh;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    background-color: white;
    font: 20px;
  }
`;
