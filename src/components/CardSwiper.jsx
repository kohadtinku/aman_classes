// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import styled from 'styled-components';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import back from "../assets/back.jpg";

import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components"

import img from '../assets/jee-adv.png'
import img2 from '../assets/jee-main.png'
import img3 from '../assets/medical.png'
import img4 from '../assets/mex.png'
import img5 from '../assets/commerce.png'
import img6 from '../assets/dlpd.png'
import img7 from '../assets/pspd.png'
import img8 from '../assets/pccp.png'

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
  background-color: rgba(255, 255, 255, 0.3); /* Adjust transparency as needed */
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 330px;
  height:300px;
  gap:2rem;
  backdrop-filter: blur(30px); /* Add blur effect */
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  @media (max-width: 768px) {
    width: 80%; /* Adjust width for smaller screens */
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

  
    <Swiper
    className="swiper1"
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Pagination, Autoplay]}
           
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }} // Autoplay with a delay of 3 seconds
    >
      <SwiperSlide>
        <CardContainer>
          <Card>
          <img src={img} alt="" />
            <h2>Card 1</h2>

          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
          <img src={img2} alt="" />
            <h2>Card 1</h2>

          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
          <img src={img3} alt="" />
            <h2>Card 1</h2>

          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
          <img src={img4} alt="" />
            <h2>Card 1</h2>

          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
          <img src={img5} alt="" />
            <h2>Card 1</h2>

          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
          <img src={img6} alt="" />
            <h2>Card 1</h2>

          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
          <img src={img7} alt="" />
            <h2>Card 1</h2>

          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
          <img src={img8} alt="" />
            <h2>Card 1</h2>
            
          </Card>
        </CardContainer>
      </SwiperSlide>

    </Swiper>
    </StyledSwiper>
  );
};

export default CardSwiper;
