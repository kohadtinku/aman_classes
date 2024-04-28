import React from "react";
import "../App.css"; // Import the CSS file
import admission from "../data/admission";

const BookComponent = () => {
  return (
    <main>
      <div className="book">
        <div className="book-cover">
          <div>
            <h2>Admission</h2>
            <div className="separator"></div>
            <h2>By Aman Classes</h2>
          </div>
        </div>
        <div className="book-content">


          {/* Display admission data */}
          <div style={{listStyle:"number"}}>
            {admission.map((item, index) => (
              <div key={index}>
                <h1>{item.title}</h1>
                {item.description && <p>{item.description}</p>}
                {item.isNew && <span>NEW</span>}
                {item.subItems && (
                  <ul style={{color:"blue"}} >
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
