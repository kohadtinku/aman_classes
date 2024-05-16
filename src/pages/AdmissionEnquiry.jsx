// import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const AdmissionEnquiry = () => {
//   const [selectedCourse, setSelectedCourse] = useState("");
//   // Function to handle dropdown change
//   const handleCourseChange = (event) => {
//     setSelectedCourse(event.target.value);
//   };

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     address: "",
//     city: "",
//     selectedCourse: "",
//     country: "",
//     state: "",
//     zipcode: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform form submission logic here
//     console.log(formData); // For example, you can log the form data
//   };

//   return (
//     <>
//       <Header />
//       <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center mt-20">
//         <div class="container max-w-screen-lg mx-auto">
//           <div>
//             <h1 className="text-center text-3xl py-3">Admission Enquiry</h1>
//               <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
//                 <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
//                   <div class="text-gray-600">
//                     <p class="font-medium text-lg">Personal Details</p>
//                     <p>Please fill out all the fields.</p>
//                   </div>

//             <form onSubmit={handleSubmit}>
//                   <div class="lg:col-span-2">
//                     <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
//                       <div class="md:col-span-5">
//                         <label for="full_name">Full Name</label>
//                         <input
//                           type="text"
//                           name="full_name"
//                           id="full_name"
//                           class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                           placeholder="your full name"
//                           value={formData.fullName}
//                           onChange={handleInputChange}
//                         />
//                       </div>

//                       <div class="md:col-span-5">
//                         <label for="email">Email Address</label>
//                         <input
//                           type="text"
//                           name="email"
//                           id="email"
//                           class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                           value=""
//                           placeholder="email@domain.com"
//                         />
//                       </div>
//                       <div class="md:col-span-5">
//                         <label for="mobile">Mobile</label>
//                         <input
//                           type="number"
//                           name="mobile"
//                           id="mobile"
//                           class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                           value=""
//                           placeholder="mobile no."
//                         />
//                       </div>

//                       <div class="md:col-span-3">
//                         <label for="address">Address / Street</label>
//                         <input
//                           type="text"
//                           name="address"
//                           id="address"
//                           class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                           value=""
//                           placeholder=""
//                         />
//                       </div>

//                       <div class="md:col-span-2">
//                         <label for="city">City</label>
//                         <input
//                           type="text"
//                           name="city"
//                           id="city"
//                           class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                           value=""
//                           placeholder=""
//                         />
//                       </div>

//                       <div class="md:col-span-2">
//                         <label for="course">Select Course</label>
//                         <select
//                           className="border border-gray-400 py-1 px-2 w-full"
//                           value={selectedCourse}
//                           onChange={handleCourseChange}
//                           required
//                         >
//                           <option value="">Select Course</option>
//                           <option value="JEE (Advanced)">JEE (Advanced)</option>
//                           <option value="JEE (Main)">JEE (Main)</option>
//                           <option value="Neet (UG)">Neet (UG)</option>
//                           <option value="CBSE">CBSE</option>
//                           <option value="PCCP">PCCP</option>
//                           <option value="MEX">MEX</option>
//                         </select>
//                       </div>

//                       <div class="md:col-span-2">
//                         <label for="country">Country / region</label>
//                         <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
//                           <input
//                             name="country"
//                             id="country"
//                             placeholder="Country"
//                             class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
//                             value=""
//                           />
//                           <button
//                             tabindex="-1"
//                             class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
//                           >
//                             <svg
//                               class="w-4 h-4 mx-2 fill-current"
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                             >
//                               <line x1="18" y1="6" x2="6" y2="18"></line>
//                               <line x1="6" y1="6" x2="18" y2="18"></line>
//                             </svg>
//                           </button>
//                           <button
//                             tabindex="-1"
//                             for="show_more"
//                             class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
//                           >
//                             <svg
//                               class="w-4 h-4 mx-2 fill-current"
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                             >
//                               <polyline points="18 15 12 9 6 15"></polyline>
//                             </svg>
//                           </button>
//                         </div>
//                       </div>

//                       <div class="md:col-span-2">
//                         <label for="state">State / province</label>
//                         <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
//                           <input
//                             name="state"
//                             id="state"
//                             placeholder="State"
//                             class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
//                             value=""
//                           />
//                           <button
//                             tabindex="-1"
//                             class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
//                           >
//                             <svg
//                               class="w-4 h-4 mx-2 fill-current"
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                             >
//                               <line x1="18" y1="6" x2="6" y2="18"></line>
//                               <line x1="6" y1="6" x2="18" y2="18"></line>
//                             </svg>
//                           </button>
//                           <button
//                             tabindex="-1"
//                             for="show_more"
//                             class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
//                           >
//                             <svg
//                               class="w-4 h-4 mx-2 fill-current"
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                             >
//                               <polyline points="18 15 12 9 6 15"></polyline>
//                             </svg>
//                           </button>
//                         </div>
//                       </div>

//                       <div class="md:col-span-1">
//                         <label for="zipcode">Zipcode</label>
//                         <input
//                           type="text"
//                           name="zipcode"
//                           id="zipcode"
//                           class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                           placeholder=""
//                           value=""
//                         />
//                       </div>

//                       <div class="md:col-span-5 text-right">
//                         <div class="inline-flex items-end">
//                           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//             </form>
//                   </div>
//                 </div>
//               </div>
//           </div>
//         </div>

//       <Footer />
//     </>
//   );
// };

// export default AdmissionEnquiry;



import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const AdmissionEnquiry = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    country: "",
    state: "",
    zipcode: "",
  });

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here


    
    console.log(formData); // For example, you can log the form data
  };

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <Header />
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center mt-20" >
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-center text-3xl py-3">Admission Enquiry</h1>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6" data-aos="zoom-in">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Personal Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="your full name"
                          value={formData.fullName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.email}
                          placeholder="email@domain.com"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="mobile">Mobile</label>
                        <input
                          type="tel"
                          name="mobile"
                          id="mobile"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.mobile}
                          placeholder="mobile no."
                          onChange={handleInputChange}
                        />
                      </div>
                      {/* Add other input fields */}

                      <div class="md:col-span-3">
                        {" "}
                        <label for="address">Address / Street</label>{" "}
                        <input
                          type="text"
                          name="address"
                          id="address"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.address}
                          placeholder=""
                          onChange={handleInputChange}

                        />{" "}
                      </div>
                      <div class="md:col-span-2">
                        {" "}
                        <label for="city">City</label>{" "}
                        <input
                          type="text"
                          name="city"
                          id="city"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.city}
                          onChange={handleInputChange}

                          placeholder=""
                        />{" "}
                      </div>
                      <div class="md:col-span-2">
                        {" "}
                        <label for="course">Select Course</label>{" "}
                        <select
                          className="border border-gray-400 py-1 px-2 w-full"
                          value={selectedCourse}
                          onChange={handleCourseChange}
                          required
                        >
                          {" "}
                          <option value="">Select Course</option>{" "}
                          <option value="JEE (Advanced)">JEE (Advanced)</option>{" "}
                          <option value="JEE (Main)">JEE (Main)</option>{" "}
                          <option value="Neet (UG)">Neet (UG)</option>{" "}
                          <option value="CBSE">CBSE</option>{" "}
                          <option value="PCCP">PCCP</option>{" "}
                          <option value="MEX">MEX</option>{" "}
                        </select>{" "}
                      </div>
                      <div class="md:col-span-2">
                        {" "}
                        <label for="country">Country / region</label>{" "}
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          {" "}
                          <input
                            name="country"
                            id="country"
                            placeholder="Country"
                            class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={formData.country}
                            onChange={handleInputChange}


                          />{" "}
                          <button
                            tabindex="-1"
                            class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                          >
                            {" "}
                            <svg
                              class="w-4 h-4 mx-2 fill-current"
                              xmlns="httpwww.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              {" "}
                              <line x1="18" y1="6" x2="6" y2="18"></line>{" "}
                              <line x1="6" y1="6" x2="18" y2="18"></line>{" "}
                            </svg>{" "}
                          </button>{" "}
                          <button
                            tabindex="-1"
                            for="show_more"
                            class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                          >
                            {" "}
                            <svg
                              class="w-4 h-4 mx-2 fill-current"
                              xmlns="httpwww.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              {" "}
                              <polyline points="18 15 12 9 6 15"></polyline>{" "}
                            </svg>{" "}
                          </button>{" "}
                        </div>{" "}
                      </div>
                      <div class="md:col-span-2">
                        {" "}
                        <label for="state">State / province</label>{" "}
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          {" "}
                          <input
                            name="state"
                            id="state"
                            placeholder="State"
                            class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={formData.state}
                            onChange={handleInputChange}


                          />
                          <button
                            tabindex="-1"
                            class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                          >
                            <svg
                              class="w-4 h-4 mx-2 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <button
                            tabindex="-1"
                            for="show_more"
                            class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                          >
                            <svg
                              class="w-4 h-4 mx-2 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="md:col-span-1">
                        <label for="zipcode">Zipcode</label>
                        <input
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          value={formData.zipcode}
                          onChange={handleInputChange}


                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmissionEnquiry;
