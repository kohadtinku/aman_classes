import React from "react";
import back from '../assets/back.jpg'
const EventsSection = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="leftBox" style={{ width: '50%', height: '100%', float: 'left', padding: '50px', boxSizing: 'border-box' }}>
                    <div className="content" style={{ color: '#fff', background: 'rgba(0, 0, 0, 0.5)', padding: '40px', transition: '.5s' }}>
                        <h1 style={{ margin: '0', padding: '0', fontSize: '50px', textTransform: 'uppercase' }}>
                            Events and Shows
                        </h1>
                        <p style={{ margin: '10px 0 0', padding: '0' }}>
                            With the idea of imparting programming knowledge, Mr. Sandeep Jain, an IIT Roorkee alumnus started a dream, GeeksforGeeks...
                        </p>
                    </div>
                </div> */}
      <div
        className="events"
        style={{
          position: "relative",
          width: "50%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          float: "right",
          boxSizing: "border-box",
        }}
      >
        <ul
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            margin: "0",
            padding: "40px",
            boxSizing: "border-box",
          }}
        >
          <li
            style={{
              listStyle: "none",
              background: "#fff",
              boxSizing: "border-box",
              height: "200px",
              margin: "15px 0",
            }}
          >
            <div
              className="time"
              style={{
                position: "relative",
                padding: "20px",
                background: "#262626",
                boxSizing: "border-box",
                width: "30%",
                height: "100%",
                float: "left",
                textAlign: "center",
                transition: ".5s",
              }}
            >
              <h2
                style={{
                  position: "absolute",
                  margin: "0",
                  padding: "0",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  fontSize: "60px",
                  lineHeight: "30px",
                }}
              >
                15 <br />
                <span>March</span>
              </h2>
            </div>
            <div
              className="details"
              style={{
                padding: "20px",
                background: "#fff",
                boxSizing: "border-box",
                width: "70%",
                height: "100%",
                float: "left",
              }}
            >
              <h3
                style={{
                  position: "relative",
                  margin: "0",
                  padding: "0",
                  fontSize: "22px",
                }}
              >
                Where is the event happening?
              </h3>
              <p
                style={{
                  position: "relative",
                  margin: "10px 0 0",
                  padding: "0",
                  fontSize: "16px",
                }}
              >
                With the idea of imparting programming knowledge, Mr. Sandeep
                Jain, an IIT Roorkee alumnus started a dream, GeeksforGeeks...
              </p>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  padding: "10px 15px",
                  border: "1.5px solid #262626",
                  marginTop: "8px",
                  fontSize: "18px",
                  transition: ".5s",
                }}
              >
                View Details
              </a>
            </div>
            <div style={{ clear: "both" }}></div>
          </li>
          {/* Repeat the above list item structure for other events */}
        </ul>
      </div>
    </section>
  );
};

export default EventsSection;
