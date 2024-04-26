import React from "react";
import Header from "./components/Header";

// import Carousel1 from "./components/MainSwiper";
import MainSwiper from "./components/MainSwiper";
import GlassCard from "./components/GlassCard";
import NewsComponent from "./components/NewsComponent";
import Swiper2 from "./components/Swiper2";
import Stats from "./components/Stats";
import ParallaxSection from "./components/ParallaxSection";

const App = () => {
  return (
    <>
      <Header />
      <MainSwiper />
      <div className="flex justify-center flex-wrap mt-10 font-serif ">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-center text-3xl top-5 hover:underline transition duration-300 ease-in-out transform hover:text-red-600">
            Admission
          </h1>
          <GlassCard />
        </div>
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-center text-3xl top-5 hover:underline transition duration-300 ease-in-out transform hover:text-red-600">
            Latest News
          </h1>
          <NewsComponent />
        </div>
      </div>

      <Swiper2 />

      <Stats />
      <ParallaxSection/>
    </>
  );
};

export default App;
