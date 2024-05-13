import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import back from "../assets/back.jpg";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";
import img from "../assets/jee-adv.png";
import img2 from "../assets/jee-main.png";
import img3 from "../assets/medical.png";
import img8 from "../assets/mex.png";
import img5 from "../assets/commerce.png";
import img6 from "../assets/dlpd.png";
import img7 from "../assets/pspd.png";
import img4 from "../assets/pccp.png";
import AOS from "aos";
import "aos/dist/aos.css";
// Styled components
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  @media (max-width: 768px) {
    height: auto; /* Change height to auto on smaller screens */
    margin-top:60px
  }
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 300px;
  height: 400px;
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
    background: linear-gradient(to right, #ff7eb3, purple);

  }
  @media (max-width: 768px) {
    height: 350px; /* Change height to auto on smaller screens */
    width:250px;
  }
`;

const StyledSwiper = styled.div`
  background: url(${back});
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    height: 500px; /* Change height to auto on smaller screens */
  }
`;

// Card swiper component
const CardSwiper = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
  
    });
  })
  return (
    <StyledSwiper data-aos="zoom-in">
      <div>
        <h1
          className="text-center"
          style={{
            top: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            position: "relative",
            fontSize: "25px",
            fontFamily:"cursive"
          }}
        >
        
          COURSES OFFERED
        </h1>
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
              <button style={{border:"1px solid black",color:"red",padding:"5px"}}>Know More</button>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img2} alt="" />
              <h2>JEE (MAIN)</h2>
              <button style={{border:"1px solid black",color:"red",padding:"5px"}}>Know More</button>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img3} alt="" />
              <h2>MEDICAL</h2>
              <button style={{border:"1px solid black",color:"red",padding:"5px"}}>Know More</button>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img4} alt="" />
              <h2>PCCP</h2>
              <button style={{border:"1px solid black",color:"red",padding:"5px"}}>Know More</button>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img5} alt="" />
              <h2>COMMERCE</h2>
              <button style={{border:"1px solid black",color:"red",padding:"5px"}}>Know More</button>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img6} alt="" />
              <h2>DLPD</h2>
              <button style={{border:"1px solid black",color:"red",padding:"5px"}}>Know More</button>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img7} alt="" />
              <h2>PSPD</h2>
              <button style={{border:"1px solid black",color:"red",padding:"5px"}}>Know More</button>
            </Card>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <Card>
              <img src={img8} alt="" />
              <h2>MEX</h2>
              <button style={{border:"1px solid black",color:"red",padding:"5px"}}>Know More</button>
            </Card>
          </CardContainer>
        </SwiperSlide>
      </Swiper>
    </StyledSwiper>
  );
};

export default CardSwiper;
