import React from 'react';
import Header from './Header';
import MainSwiper from './MainSwiper';
import CardSwiper from './CardSwiper';
import BookComponent from './BookComponent';
import NewsComponent from './NewsComponent';
import NewsAndEvents from './NewsAndEvents';
import Stats from './Stats';
import Footer from './Footer';
import back from '../assets/back2.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <MainSwiper />
      <CardSwiper />
      
      <div className="flex justify-center flex-wrap mt-10 font-serif" style={{ backgroundImage: `url(${back})` }}>
        <div>
          <h1 className="text-center text-6xl top-5 hover:underline transition duration-300 ease-in-out transform hover:text-red-600">
            Admission
          </h1>
          <BookComponent />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 className="text-center text-6xl">Latest News</h1>
        <NewsComponent />
      </div>

      <NewsAndEvents />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;
