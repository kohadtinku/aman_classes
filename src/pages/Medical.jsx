import React from 'react';
import '../style/MedicalContent.css';
import medicalImage from '../assets/neet.jpg'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const img1 = 'https://www.resonance.ac.in/menu/img/banner/2024/neet-result-out-v1.png';

const Medical = () => {
  const courseBenefits = [
    "Advanced medical education",
    "Expert faculty",
    "State-of-the-art medical facilities",
    "Research opportunities",
    "Wide-ranging medical specializations",
    "Clinical exposure",
    "Internship programs",
    "Global recognition"
  ];

  return (
    <>
      <Header />
      <div className="medical-container mt-24">
      <img src={medicalImage} alt="" />

        <div className="medical-content">
          <h2>National Eligibility cum Entrance Test (NEET)</h2>
          <p>
            The National Eligibility cum Entrance Test (NEET) is a medical entrance examination conducted for admission to undergraduate medical courses in India. It is the only entrance test for admission to MBBS, BDS, AYUSH, and other medical courses in approved/recognized medical/dental and other colleges in India.
          </p>
          <p>
            NEET is mandatory for Indian students as well as Overseas Citizen of India (OCI), Persons of Indian Origin (PIO), Non-Resident Indians (NRIs), and foreign nationals seeking admission to MBBS/BDS courses in India.
          </p>
          <p>
            The exam is conducted by the National Testing Agency (NTA) and consists of multiple-choice questions (MCQs) from Physics, Chemistry, and Biology (Botany & Zoology).
          </p>
        </div>

        <div className="medical-table-container">
          <h3>Fee Structure</h3>
          <table className="medical-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Duration</th>
                <th>Fees (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MBBS</td>
                <td>4.5 Years + 1 Year Internship</td>
                <td>15,00,000 per year</td>
              </tr>
              <tr>
                <td>BDS</td>
                <td>4 Years + 1 Year Internship</td>
                <td>10,00,000 per year</td>
              </tr>
              <tr>
                <td>MD/MS</td>
                <td>3 Years</td>
                <td>20,00,000 per year</td>
              </tr>
            </tbody>
          </table>

          <div className="medical-content">
            <h3>Additional Course Information</h3>
            <p>
              The NEET curriculum is designed to assess the knowledge and understanding of students in subjects such as Biology, Chemistry, and Physics, with a focus on medical applications.
            </p>
            <p>
              In addition to theoretical knowledge, the curriculum emphasizes practical skills and clinical exposure to prepare students for real-world medical practice.
            </p>
            <p>
              Successful NEET candidates can pursue further specialization in various medical fields and contribute to advancements in healthcare through research and clinical practice.
            </p>
          </div>
          <button className="medical-apply-button">Apply</button>
        </div>
      </div>

      <div className="medical-card-container">
        {courseBenefits.map((benefit, index) => (
          <div className="medical-card" key={index}>
            <img src={medicalImage} alt="" />
            <h4>Benefit {index + 1}</h4>
            <p>{benefit}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Medical;
