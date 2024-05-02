import React from "react";
import "../App.css"; // Import the CSS file
import admission from "../data/admission";

const BookComponent = () => {
  return (
    <main className="main">
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
          <div >
            {admission.map((item, index) => (
              <div key={index}>
                <h1 style={{fontSize:"29px"}}>{item.title}</h1>
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
