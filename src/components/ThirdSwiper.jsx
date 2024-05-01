import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../style/thirdswiper.css'; // Import your custom styles
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// Import Swiper modules
import { Pagination } from 'swiper/modules';

const Thirdswiper = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      className="mySwiper"
      modules={[Pagination]}
    >
      <SwiperSlide>
        <div className="slide-content" style={{ backgroundImage: 'url("your_image_url")' }}>
          <h2 className="slide-title">Slide 1</h2>
          <p className="slide-description">Your description here</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content" style={{ backgroundImage: 'url("your_image_url")' }}>
          <h2 className="slide-title">Slide 2</h2>
          <p className="slide-description">Your description here</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content" style={{ backgroundImage: 'url("your_image_url")' }}>
          <h2 className="slide-title">Slide 3</h2>
          <p className="slide-description">Your description here</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Thirdswiper;
