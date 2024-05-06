import React from "react";
import Header from "../components/Header";
import img from "../assets/jee-adv.png";
import img2 from "../assets/jee-main.png";
import img3 from "../assets/medical.png";
import img4 from "../assets/pccp.png";
import img8 from "../assets/mex.png";
import img5 from "../assets/commerce.png";
import img6 from "../assets/dlpd.png";
import img7 from "../assets/pspd.png";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const Table = () => {
  return (
    <>
      <Header />
      <h2 className="text-center mt-36 text-3xl text-orange-400">
        Fees Structure
      </h2>
      <div class="overflow-x-auto py-8 ">
        <table class="min-w-full bg-white font-[sans-serif]">
          <thead class="whitespace-nowrap bg-gray-100 rounded">
            <tr>
              <th class="px-6 py-4 text-left text-sm font-semibold text-black">
                Target
              </th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-black">
                Classes
              </th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-black">
                Course Duration
              </th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-black">
                Tuition Fee
              </th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-black">
                Total Course Fee
              </th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-black">
                Apply
              </th>
            </tr>
          </thead>
          <tbody class="whitespace-nowrap">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-3 text-sm">
                <div class="flex items-center cursor-pointer">
                  <img src={img} class="w-9 h-9 rounded-md shrink-0" />
                  <div class="ml-4">
                    <p class="text-sm text-black">JEE (Advanced)</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-3 text-sm">XI,XII</td>
              <td class="px-6 py-3 text-sm">1 Year</td>
              <td class="px-6 py-3 text-sm">84000</td>
              <td class="px-6 py-3 text-sm">106000</td>
              <td class="px-6 py-3 text-sm">Apply here</td>
            </tr>
            {/* second */}
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-3 text-sm">
                <div class="flex items-center cursor-pointer">
                  <img src={img2} class="w-9 h-9 rounded-md shrink-0" />
                  <div class="ml-4">
                    <p class="text-sm text-black">JEE (Main)</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-3 text-sm">XI,XII & XIII</td>
              <td class="px-6 py-3 text-sm">1 Year</td>
              <td class="px-6 py-3 text-sm">67000</td>
              <td class="px-6 py-3 text-sm">102000</td>
              <td class="px-6 py-3 text-sm">Apply here</td>
            </tr>
            {/* third */}
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-3 text-sm">
                <div class="flex items-center cursor-pointer">
                  <img src={img3} class="w-9 h-9 rounded-md shrink-0" />
                  <div class="ml-4">
                    <p class="text-sm text-black">NEET (UG)</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-3 text-sm">XI,XII & XIII</td>
              <td class="px-6 py-3 text-sm">1 Year</td>
              <td class="px-6 py-3 text-sm">84000</td>
              <td class="px-6 py-3 text-sm">115000</td>
              <td class="px-6 py-3 text-sm">Apply here</td>
            </tr>
            {/* fourth */}
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-3 text-sm">
                <div class="flex items-center cursor-pointer">
                  <img src={img7} class="w-9 h-9 rounded-md shrink-0" />
                  <div class="ml-4">
                    <p class="text-sm text-black"> CBSE</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-3 text-sm">XI,XII</td>
              <td class="px-6 py-3 text-sm">2 Year</td>
              <td class="px-6 py-3 text-sm">8000</td>
              <td class="px-6 py-3 text-sm">68000</td>
              <td class="px-6 py-3 text-sm">Apply here</td>
            </tr>
            {/* five */}
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-3 text-sm">
                <div class="flex items-center cursor-pointer">
                  <img src={img4} class="w-9 h-9 rounded-md shrink-0" />
                  <div class="ml-4">
                    <p class="text-sm text-black">PCCP</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-3 text-sm">X</td>
              <td class="px-6 py-3 text-sm">1 Year</td>
              <td class="px-6 py-3 text-sm">8000</td>
              <td class="px-6 py-3 text-sm">70000</td>
              <td class="px-6 py-3 text-sm">Apply here</td>
            </tr>
            {/* six */}
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-3 text-sm">
                <div class="flex items-center cursor-pointer">
                  <img src={img8} class="w-9 h-9 rounded-md shrink-0" />
                  <div class="ml-4">
                    <p class="text-sm text-black">MEX</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-3 text-sm">X,XII & Graduates</td>
              <td class="px-6 py-3 text-sm">1 Year</td>
              <td class="px-6 py-3 text-sm">80000</td>
              <td class="px-6 py-3 text-sm">120000</td>
              <td class="px-6 py-3 text-sm">Apply here</td>
            </tr>
        

          </tbody>
        </table>
      </div>
      <Stats/>
      <Footer/>
    </>
  );
};

export default Table;
