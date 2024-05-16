import React from 'react';
import '../style/about.css'; 
// import Header from './Header';
import teamImage from '../assets/c1.jpg'; 
import teamImage1 from '../assets/c1.jpg'; 
import teamImage2 from '../assets/c2.jpg'; 
import teamImage3 from '../assets/back.jpg'; 
import Header from '../components/Header';

const About = () => {
//     return (
//         <div className="about-page">
//             <Header />
//             <div className="about-container">
//                 <section className="section">
//                     <div className="section-header">
//                         <h2>Welcome to Raman Coaching Classes</h2>
//                         <p>Your pathway to success starts here</p>
//                     </div>
//                     <div className="section-content">
//                         <p>
//                             At XYZ Coaching Classes, we believe that every student has the potential to excel. 
//                             With our experienced faculty and comprehensive study materials, we aim to provide 
//                             top-notch coaching to help students achieve their academic goals.
//                         </p>
//                         <p>
//                             Our coaching classes cover a wide range of subjects, including JEE, NEET, and 
//                             other competitive exams. We offer personalized attention to each student, 
//                             focusing on their strengths and weaknesses to maximize their learning outcomes.
//                         </p>
//                     </div>
//                 </section>
//                 <section className="section">
//                     <div className="section-header">
//                         <h2>Our Team</h2>
//                         <p>Meet the mentors behind our success</p>
//                     </div>
//                     <div className="team">
//                         <img src={teamImage} alt="Team" className="team-image" />
//                         <div className="team-details">
//                             <h3>John Doe</h3>
//                             <p>Founder & Head Mentor</p>
//                             <p>With over 15 years of experience in coaching, John is dedicated to guiding students towards success.</p>
//                         </div>
//                         {/* Add more team members as needed */}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );        
// };
return (
    <>
<Header/>
    <div className="about-us mt-28">
<h1 style={{fontSize:"20px"}}>About Classes</h1>
      <div className="section">
        <div className="image">
          <img src={teamImage} alt="Our Mission" />
        </div>
        <div className="text">
          <h2>Our Mission</h2>
          <p>We aim to provide the best services for our customers...</p>
          <h3>About Our Classes</h3>
          <p>We offer a variety of classes tailored to different skill levels and interests. Our classes include:</p>
          <ul>
            <li>Beginner Courses: Designed for those new to the field.</li>
            <li>Intermediate Workshops: Perfect for those looking to expand their knowledge.</li>
            <li>Advanced Seminars: For experienced individuals seeking in-depth learning.</li>
          </ul>
          <p>Each class is led by experienced instructors committed to providing personalized attention and hands-on experience.</p>
        </div>
      </div>
      <div className="section">
        <div className="text">
          <h2>Our Vision</h2>
          <p>We strive to be the leading company in the industry...</p>
          <h3>Class Structure and Schedule</h3>
          <p>Our classes are structured to maximize learning and engagement. The schedule includes:</p>
          <ul>
            <li>Morning Sessions: Focused on theory and foundational knowledge.</li>
            <li>Afternoon Workshops: Hands-on activities and practical applications.</li>
            <li>Evening Discussions: Interactive Q&A and group discussions to reinforce learning.</li>
          </ul>
          <p>Our flexible scheduling options ensure that you can find a class that fits your timetable.</p>
        </div>
        <div className="image">
          <img src={teamImage2} alt="Our Vision" />
        </div>
      </div>
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src={teamImage3} alt="Gallery Image 1" />
          <img src={teamImage} alt="Gallery Image 2" />
          <img src={teamImage} alt="Gallery Image 3" />
          <img src={teamImage} alt="Gallery Image 4" />
        </div>
      </div>
    </div>
    </>
  );
};

export default About;