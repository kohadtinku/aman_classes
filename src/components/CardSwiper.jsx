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

// Styled components
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 200px;
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
            <h2>Card 1</h2>
            <p>This is the content of card 1.</p>
          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
            <h2>Card 2</h2>
            <p>This is the content of card 2.</p>
          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
            <h2>Card 3</h2>
            <p>This is the content of card 3.</p>
          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
            <h2>Card 3</h2>
            <p>This is the content of card 3.</p>
          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
            <h2>Card 3</h2>
            <p>This is the content of card 3.</p>
          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
            <h2>Card 3</h2>
            <p>This is the content of card 3.</p>
          </Card>
        </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardContainer>
          <Card>
            <h2>Card 3</h2>
            <p>This is the content of card 3.</p>
          </Card>
        </CardContainer>
      </SwiperSlide>
    </Swiper>
    </StyledSwiper>
  );
};

export default CardSwiper;
