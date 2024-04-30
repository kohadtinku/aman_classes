import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import back from "../assets/back.jpg";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";
import img from '../assets/jee-adv.png';
import img2 from '../assets/jee-main.png';
import img3 from '../assets/medical.png';
import img8 from '../assets/mex.png';
import img5 from '../assets/commerce.png';
import img6 from '../assets/dlpd.png';
import img7 from '../assets/pspd.png';
import img4 from '../assets/pccp.png';

// Styled components
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  @media (max-width: 768px) {
    height: auto; /* Change height to auto on smaller screens */
  }
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 300px;
  height: 300px;
  gap: 2rem;
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;

  img {
  
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.07);
  }
`;

const StyledSwiper = styled.div`
  background: url(${back});
  background-size: cover;
  background-position: center;
`;

// Card swiper component
const CardSwiper = () => {
  return (
    <StyledSwiper>
      <div>
        <h2 className="text-center" style={{ top: "50px", left: "50%", transform: "translateX(-50%)", position: "relative", fontSize: "25px" }}>OUR COURSES</h2>
      </div>

      <Swiper
        className="swiper1"
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          425: { slidesPerView: 1 }, // One slide per view for max width 425px
          768: { slidesPerView: 3 }, // Three slides per view for max width 768px
        }}
      >
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img} alt="" />
              <h2>JEE (ADVANCED)</h2>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img2} alt="" />
              <h2>JEE (MAIN)</h2>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img3} alt="" />
              <h2>MEDICAL</h2>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img4} alt="" />
              <h2>PCCP</h2>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img5} alt="" />
              <h2>COMMERCE</h2>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img6} alt="" />
              <h2>DLPD</h2>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img7} alt="" />
              <h2>PSPD</h2>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img8} alt="" />
              <h2>MEX</h2>
            </Card>
          </CardContainer>
        </SwiperSlide>
      </Swiper>
    </StyledSwiper>
  );
};

export default CardSwiper;
