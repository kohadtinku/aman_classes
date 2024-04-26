// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import img from "../assets/img1.jpg";
// import img2 from "../assets/img2.png";
// import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
// import styled from "styled-components";

// const Swiper2 = () => {
//   return (
//     <>
//     <MAIN>

//   <div className="main_container">

//  <h1 className="text-center text-3xl p-5 pb-10">COURSES @ AMAN CLASSES</h1>
//       <SliderContainer>
//         <Swiper
//           direction={"vertical"}
//           pagination={{
//             clickable: true,
//           }}
//           loop={true}
//           modules={[Pagination, Mousewheel, Autoplay]} // Include Autoplay module
//           mousewheel={{
//             invert: true,
//           }}
//           autoplay={{ // Configure Autoplay
//             delay: 3000, // 3 seconds delay between slides
//             disableOnInteraction: false, // Autoplay will not be disabled when user interacts with the swiper
//           }}
//         >
//           <div className="custom_swiper">
//             <SwiperSlide>
//               <img src={img} alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={img2} alt="" />
//             </SwiperSlide>
//           </div>

//           <div className="swiper_text">
//             <h1 >hii</h1>
//           </div>
//         </Swiper>
//       </SliderContainer>
//       </div>
//       </MAIN>
//     </>
//   );
// };
// export default Swiper2;

// const SliderContainer = styled.div`
//   margin-top: 0px;
//   overflow: hidden;
//   border:1px solid black;
//    background: #ffffff;
//        border-radius:50px;

//   .swiper {
//     width: 70vw;
//     height: 50vh;

//   }
//   .swiper img {
//     width: 500px;
//     height: 250px;
//     border-radius:50px;
//     margin-top:5vh;
//     margin-rigth:50px
//   }

// `;
// const MAIN = styled.div`
// .main_container{
//     background: #e5e5e5;
//     padding: 56px;
// }
// `







import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";

const Swiper2 = () => {
  return (
    <>
      <MAIN>
        <div className="main_container">
          <h1 className="text-center text-3xl p-5 pb-10">COURSES @ AMAN CLASSES</h1>
          <SliderContainer>
            <Swiper
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Pagination, Mousewheel, Autoplay]}
              mousewheel={{
                invert: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              <div className="custom_swiper">
                <SwiperSlide>
                  <div className="swiper_text">
                    <p>Course Start : 10 June 24</p>
                    <h1 className="text-black font-bold">IIT</h1>
                    <p>hii</p>
                    <button>Read More</button>
                  </div>
                  <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_text">
                    <h1>Text for Slide 2</h1>
                  </div>
                  <img src={img2} alt="" />
                </SwiperSlide>
              </div>
            </Swiper>
          </SliderContainer>
        </div>
      </MAIN>
    </>
  );
};
export default Swiper2;

const SliderContainer = styled.div`
  margin-top: 0px;
  overflow: hidden;
  border: 1px solid black;
  background: #ffffff;
  border-radius: 50px;
  justify-content:center;
  width:70vw;

  .swiper {
    width: 60vw;
    height: 50vh;
  }
  .swiper img {
    width: 300px;
    height: 250px;
    border-radius: 50px;
    margin-top: 5vh;
    margin-right: 50px;
    z-index:99
  }

  .swiper_text {
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    text-align: left;
  }
`;

const MAIN = styled.div`
  .main_container {
    background: #e5e5e5;
    padding: 56px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
