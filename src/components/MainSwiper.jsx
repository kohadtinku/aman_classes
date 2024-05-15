// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import styled from "styled-components";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const MainSwiper = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 425);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,  
//     });
//   })
//   return (
//     <SliderContainer data-aos="zoom-in">
//       <Swiper
//         cssMode={false}
//         navigation={true}
//         pagination={true}
//         autoplay={true}
//         loop={true}
//         modules={[Autoplay, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img className="img" src={isSmallScreen ? img1 : img1} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="img" src={isSmallScreen ? img3 : img3} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="img" src={isSmallScreen ? img2 : img2} alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </SliderContainer>
//   );
// };

// export default MainSwiper;

// const SliderContainer = styled.div`
//   margin-top: 114px;
//   height: 60vh; /* Adjusted height for smaller screens */

//   .swiper {
//     width: 100vw;
//     height: 100%;
//   }

//   .swiper-slide {
//     text-align: center;
//     font-size: 18px;
//     background: #fff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
//   }

//   .swiper-slide .img {
//     overflow: hidden;
//     width: 100%;
//     height: 100%;
//   }

//   .mySwiper {
//     width: 100%;
//     height: 60vh; /* Adjusted height for smaller screens */
//   }

//   .swiper-button-prev:after,
//   .swiper-button-next:after {
//     color: white;
//     font-size: 25px;
//   }

//   .swiper-wrapper {
//     max-height: 60vh; /* Adjusted height for smaller screens */
//     object-fit: cover;
//   }

//   .swiper-pagination-bullet {
//     background-color: white;
//     font: 20px;
//   }
// `;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const MainSwiper = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 425);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <SliderContainer data-aos="fade-down" className="custom_swiper" style={{height:"fit-content"}}>
      <Swiper
        cssMode={false}
        navigation={true}
        autoplay={{ delay: 3000 }} // Adjust delay as per your requirement
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="img" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};

export default MainSwiper;

const SliderContainer = styled.div`
  margin-top: 140px;
  height: 60vh;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .swiper-slide .img {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .mySwiper {
    width: 100%;
    height: 60vh; /* Adjusted height for smaller screens */
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: white;
    font-size: 25px;
  }

  .swiper-wrapper {
    max-height: 60vh; /* Adjusted height for smaller screens */
    object-fit: cover;
  }

  @media screen and (max-width: 425px) {
    .mySwiper {
      height: 40vh; /* Adjusted height for smaller screens */
    }
    .custom_swiper{
      height:"fit-content" ;
    }
  }
`;
