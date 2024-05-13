// import React from 'react'
// import logo from '../assets/raman1.png'
// import Header from '../components/Header'
// import { Link } from 'react-router-dom'
// import Footer from '../components/Footer'
// import img from '../assets/1.jpg'
// const Login = () => {
//   return (
// <>

// <Header/>
// <div>
// <img src={img} alt="" />
// <section class=" dark:bg-gray-900 mt-32">
//   <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//       <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//           <img class="w-32 h-20 mr-2" src={logo}alt="logo"/>
//        RAMAN CLASSES   
//       </a>
//       <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h2 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                   Sign in to your account
//               </h2>
//               <form class="space-y-4 md:space-y-6" action="#">
//                   <div>
//                       <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                       <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
//                   </div>
//                   <div>
//                       <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                       <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                   </div>
//                   <div class="flex items-center justify-between">
//                       <div class="flex items-start">
//                           <div class="flex items-center h-5">
//                             <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
//                           </div>
//                           <div class="ml-3 text-sm">
//                             <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
//                           </div>
//                       </div>
//                       <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
//                   </div>
//                   <button type="submit" class="w-full text-black bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
//                   <p class="text-sm font-light text-gray-500 dark:text-gray-400">
//                       Don’t have an account yet? <Link to={"/register"} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
//                   </p>
//               </form>
//           </div>
//       </div>
//   </div>
// </section>
// </div>
// <Footer/>
// </>
//   )
// }

// export default Login


import React, { useEffect, useState } from 'react';
import logo from '../assets/raman1.png';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import img from '../assets/1.jpg';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
const Login = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend using Axios
      const response = await axios.post('/api/login', formData);
      if (response.status === 200) {
        // Authentication successful, redirect to dashboard or desired page
        window.location.href = '/dashboard';
      } else {
        // Handle authentication error
        alert('Authentication failed');
      }
    } catch (error) {
      // Handle authentication error
      console.error('Error:', error);
      alert('Authentication failed');
    }
  };

  return (
    <>
      <Header />
      <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <section className="dark:bg-gray-900 mt-28" data-aos="zoom-in">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
              <img className="w-32 h-20 mr-2" src={logo} alt="logo" />
              RAMAN CLASSES
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h2>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                      </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-black bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <Link to={"/register"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Login;
