import React, { useEffect } from "react";
import "../App.css"; // Import the CSS file
import admission from "../data/admission";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const BookComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <main className="main" data-aos="zoom-in">
      <div className="book">
        <div className="book-cover">
          <div>
            <h2>Admission</h2>
            <div className="separator"></div>
            <h2>By Raman Classes</h2>
          </div>
        </div>
        <div className="book-content">
          {/* Display admission data */}
          <div>
            {admission.map((item, index) => (
              <div key={index}>
                <h1 style={{ fontSize: "20px" }}>
                  <Link to={item.href}>{item.title}</Link>
                </h1>
                {item.description && <p>{item.description}</p>}
                {item.isNew && <span>NEW</span>}
                {item.subItems && (
                  <ul style={{ color: "blue" }}>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookComponent;
