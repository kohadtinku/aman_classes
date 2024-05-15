import React from 'react';
import Header from './Header';
import MainSwiper from './MainSwiper';
import CardSwiper from './CardSwiper';
import BookComponent from './BookComponent';
import NewsComponent from './NewsComponent';
import NewsAndEvents from './NewsAndEvents';
import Stats from './Stats';
import Footer from './Footer';
import back from '../assets/contactback.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <MainSwiper />
      <CardSwiper />
      
      <div className="flex justify-center flex-wrap mt-10 font-serif" style={{ backgroundImage: `url(${back})` }}>
        <div>
          <h2 className="text-center text-white text-4xl top-5 hover:underline  py-4 transition duration-300 ease-in-out transform hover:text-red-600">
            Admission
          </h2>
          <BookComponent />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 className="text-center text-4xl py-4">Latest News</h1>
        <NewsComponent />
      </div>

      <Stats />
      <NewsAndEvents />
      <Footer />
    </>
  );
}

export default Home;
