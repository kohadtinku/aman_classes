import React, { useState } from "react";
import Header from "../components/Header";
import back2 from "../assets/stud.jpg";
import Footer from "../components/Footer";

const MultiStepForm = () => {
  // State for dropdown selection
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCenter, setSelectedCenter] = useState('');

  // Function to handle dropdown change
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleCenterChange = (event) => {
    setSelectedCenter(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="form-container min-h-screen py-40" style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${back2})`, objectFit: "cover" }}>
              <h1 className="text-white text-3xl mb-3">Welcome</h1>
              <div>
                <p className="text-white">
              Learner, welcome to Raman Classes, your one-stop destination for top-quality education to help you excel in your JEE and NEET exams. Explore our range of products designed specifically to aid you in your journey towards success.
                  <a href="#" className="text-purple-500 font-semibold">Learn more</a>
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Register here</h2>
              <form action="#">
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2" required />
                  <input type="text" placeholder="Lastname" className="border border-gray-400 py-1 px-2" required />
                </div>
                <div className="mt-5">
  <input type="email" name="email" placeholder="email" className="border border-gray-400 py-1 px-2 w-full" required />
</div>

                <div className="mt-5">
                  <input type="number" min={10} max={10} placeholder="Mobile" className="border border-gray-400 py-1 px-2 w-full" required />
                </div>
                <div className="mt-5">
                  <select className="border border-gray-400 py-1 px-2 w-full" value={selectedCourse} onChange={handleCourseChange} required>
                    <option value="">Select Course</option>
                    <option value="JEE (Advanced)">JEE (Advanced)</option>
                    <option value="JEE (Main)">JEE (Main)</option>
                    <option value="Neet (UG)">Neet (UG)</option>
                    <option value="CBSE">CBSE</option>
                    <option value="PCCP">PCCP</option>
                    <option value="MEX">MEX</option>
                  </select>
                </div>
                <div className="mt-5">
                  <select className="border border-gray-400 py-1 px-2 w-full" value={selectedCenter} onChange={handleCenterChange} required>
                    <option value="">Select Study Center</option>
                    <option value="Nagpur">Nagpur</option>
                  </select>
                </div>
                <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400" required /> 
                  <span > &nbsp;
                    I accept the{" "}
                    <a href="#" className="text-purple-500 font-semibold">Terms of Use</a>{" "}
                    &{" "}
                    <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                  </span>
                </div>
                <div className="mt-5">
                  <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MultiStepForm;
