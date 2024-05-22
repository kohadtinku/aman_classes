import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Stats = () => {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prevUptime) => prevUptime + 1);
    }, 3600000); // Update every hour (3600000 milliseconds)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 2000,
  
    });
  })
  return (
    <>
      <div class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />
      <div class="min-h-[370px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 class="text-3xl font-bold mb-16 text-center">Application Metrics</h2>
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-lg:gap-12">
          <div class="text-center">
            <h3 class="text-4xl font-extrabold">5.4M+</h3>
            <p class="text-base text-gray-300 font-bold mt-3">Total Users</p>
            <p class="text-sm text-gray-300 mt-2">The total number of registered users on the platform.</p>
          </div>
          <div class="text-center">
            <h3 class="text-4xl font-extrabold">$80K</h3>
            <p class="text-base text-gray-300 font-bold mt-3">Revenue</p>
            <p class="text-sm text-gray-300 mt-2">The total revenue generated by the application.</p>
          </div>
          <div class="text-center">
            <h3 class="text-4xl font-extrabold">100K</h3>
            <p class="text-base text-gray-300 font-bold mt-3">Engagement</p>
            <p class="text-sm text-gray-300 mt-2">The level of user engagement with the application's content and features.</p>
          </div>
          <div class="text-center">
            <h3 class="text-4xl font-extrabold">99.9%</h3>
            <p class="text-base text-gray-300 font-bold mt-3">Server Uptime</p>
            <p class="text-sm text-gray-300 mt-2">The percentage of time the server has been operational and available.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Stats;
