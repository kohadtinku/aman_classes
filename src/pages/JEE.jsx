import React from 'react';
import '../style/JEEContent.css';
import jeeImage from '../assets/back.jpg'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
const  img1 = 'https://www.resonance.ac.in/menu/img/banner/2024/jee-main-jan-session-1-result-2-v1.png';

const JEE = () => {
  const courseBenefits = [
    "High-quality education",
    "Experienced faculty",
    "Modern infrastructure",
    "Extensive research opportunities",
    "Strong alumni network",
    "Excellent placement record",
    "Scholarship programs",
    "Global exposure"
  ];

  return (
    <>
      <Header />
      <div className="jee-container mt-24">
        <img src={img1} alt="JEE Examination" className="jee-image" />
        <div className="jee-content">
          <h2>Joint Entrance Examination (JEE)</h2>
          <p>
            The Joint Entrance Examination (JEE) is an engineering entrance assessment conducted for admission to various engineering colleges in India. It is constituted by two different examinations - JEE Main and the JEE Advanced. The exams are of the objective pattern.
          </p>
          <p>
            JEE Main is the first phase of the examination, which is conducted for admissions to undergraduate engineering programs at NITs, IIITs, and other centrally funded technical institutions (CFTIs) as well as institutions/universities funded/recognized by participating State Governments.
          </p>
          <p>
            JEE Advanced is the second phase of the examination. Only the top candidates who qualify the JEE Main are eligible to appear for JEE Advanced. It is conducted for admissions to the Indian Institutes of Technology (IITs).
          </p>
        </div>

        <div className="jee-table-container">
          <h3>Fee Structure</h3>
          <table className="jee-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Duration</th>
                <th>Fees (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B.Tech</td>
                <td>4 Years</td>
                <td>1,00,000 per year</td>
              </tr>
              <tr>
                <td>M.Tech</td>
                <td>2 Years</td>
                <td>1,20,000 per year</td>
              </tr>
              <tr>
                <td>Ph.D</td>
                <td>3-5 Years</td>
                <td>60,000 per year</td>
              </tr>
            </tbody>
          </table>

          <div className="jee-content">
            <h3>Additional Course Information</h3>
            <p>
              The JEE curriculum is designed to test the depth of understanding and knowledge of students in subjects such as Mathematics, Physics, and Chemistry. It requires rigorous preparation and a strong foundation in these subjects.
            </p>
            <p>
              Apart from the core subjects, the curriculum also includes various workshops, seminars, and project work to enhance practical knowledge and problem-solving skills.
            </p>
            <p>
              Successful candidates who clear the JEE Advanced examination can gain admission to prestigious institutions like the IITs, which are known for their excellent academic environment, state-of-the-art facilities, and strong placement records.
            </p>
          </div>
          <button className="jee-apply-button">Apply</button>
        </div>
      </div>

      <div className="jee-card-container">
        {courseBenefits.map((benefit, index) => (
          <div className="jee-card" key={index}>
            <img src={jeeImage} alt="" />
            <h4>Benefit {index + 1}</h4>
            <p>{benefit}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default JEE;
