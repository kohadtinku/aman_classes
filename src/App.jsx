import React from "react";
import Header from "./components/Header";

// import Carousel1 from "./components/MainSwiper";
import MainSwiper from "./components/MainSwiper";
import GlassCard from "./components/GlassCard";
import NewsComponent from "./components/NewsComponent";
import Swiper2 from "./components/Swiper2";
import Stats from "./components/Stats";
import ParallaxSection from "./components/ParallaxSection";
import Footer from "./components/Footer";
// import NewCard from "./components/NewCard";
import Division from "./components/Divison";
import CardSwiper from "./components/CardSwiper";
import CardComponent from "./components/CardComponent";
import BookComponent from "./components/BookComponent";
import BookContent from "./components/BookConent";
import back from "./assets/back2.jpg";
import EventsSection from "./components/EventSection";
import Courses from "./components/Courses";
import NewsAndEvents from "./components/NewsAndEvents";
import Thirdswiper from "./components/ThirdSwiper";

const App = () => {
  return (
    <>
      <Header />
      <MainSwiper />
      
      <CardSwiper />
      <div
        className="flex justify-center flex-wrap mt-10 font-serif "
        style={{ background: `url${back}` }}
      >
        <div className="" style={{ background: `url${back}` }}>
          <h1 className="text-center text-3xl top-5 hover:underline transition duration-300 ease-in-out transform hover:text-red-600" style={{width:"fit-content"}}>
            Admission
          </h1>

          <BookComponent />
        </div>
      </div>

      {/* <NewsEventSection/> */}
      <div >
      <h1 className="text-center text-4xl">Latest News/Events</h1>
        {/* <EventsSection /> */}
        {/* <div style={{position:"absolute",top:"325vh"}}> */}
          <NewsComponent />
        {/* </div> */}
      </div>
      <NewsAndEvents/>
      {/* <Thirdswiper/> */}
      {/* <Swiper2 /> */}
      {/* <Courses/> */}
      <Stats />

      {/* <BookContent /> */}
      <Footer />
     
    </>
  );
};

export default App;
