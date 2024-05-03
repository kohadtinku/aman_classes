import React, { useEffect, useState } from "react";
import logo from '../assets/logo1.png'
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

const handleClick = () => {
  setIsMenuOpen(!isMenuOpen);
};

useEffect(() => {
  AOS.init({
    duration: 2000,
  });
})

  return (
    <>
     

      <header data-aos="fade-in" className="flex border-b border-1 bg-white font-sans min-h-[70px] tracking-wide relative z-50" style={{position:"fixed",width:"100%",top:"0",boxShadow:"2px 2px 4px rgba(0, 0, 0.4, 0.3)"}}>

        <div className="w-full flex flex-wrap items-center justify-center gap-6 px-10 py-3 relative">
        <a href="javascript:void(0)">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-36"
                  />
                </a>

          <div
         
          id="collapseMenu"
          style={{ display: isMenuOpen ? "block" : "none" }}
          className="lg:!flex max-lg:hidden max-lg:w-full lg:space-x-10 max-lg:space-y-3 max-lg:my-4"
       
        
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3 mr-6"
              onClick={handleClick}
              style={{display:isMenuOpen?"block":"none"}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
                style={{marginTop:"40px"}}
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex lg:ml-10 lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 custom_ul">
              <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
                <a href="javascript:void(0)">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>

              {/* ============= */}
              <li className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  APPLY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div className="absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Apply Online
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Login
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Admit card
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Result
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Test Reappearing
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Course Finder
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* ========== */}
              <li className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  ADMISSION
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div className="absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Apply online
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Fee Structure
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Scholarship
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Reward Programmes
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Fee Refund Rules
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* ========== */}
              <li className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  COURSES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div className="absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 className="text-base text-[#007bff] font-bold">
                      Classroom Contact
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          JEE(Main + Advanced){" "}
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          JEE (Main)
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          NEET/AIIMS
                        </a>
                      </li>

                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          BITSAT
                        </a>
                      </li>

                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          CBSE
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          NTSE
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 className="text-base text-[#007bff] font-bold">
                      Pre-Foundation
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          CIass IX
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          CIass X
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          CIass XI
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          CIass XII
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-base text-[#007bff] font-bold">
                      Multiple Examination
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          SSC
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          BANK
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          RAILWAY
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* ========== */}
              <li className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  STUDENT ZONE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div className="absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Student Zone
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Pay Fee Online
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Exam Calender
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* ========== */}
              <li className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  RESULTS
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div className="absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          JEE (ADVANCED)
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          JEE (MAIN)
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          MEDICAL
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          NTSE
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          STSE
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          KVPY
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* ========== */}
              <li className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  ABOUT US
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div className="absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          ABOUT CLASSES
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          SUCCESS STORY
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          INFO
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          FAQ's
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* ========== */}
              <li className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  CONTACT US
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div className="absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          CONTACT US
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          ADMISSION ENQUIRY
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          COUNSELLING
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          JOBS
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* ========== */}
            </ul>
          </div>

          <div className="flex items-center ml-auto lg:hidden">
            <button id="toggleOpen">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClick}
                style={{display:!isMenuOpen?"block":"none"}}

              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
   
    </>
  );
};


export default Header;
