import React from "react";
import newsImage1 from "../assets/e1.jpg";
import newsImage2 from "../assets/e2.jpg";
import newsImage3 from "../assets/e3.jpg";

const NewsAndEvents = () => {
  const newsAndEvents = [
    {
      title: "Student Programme",
      date: "April 15, 2024",
      description: "Join us to the Raman Classes to get bright future",
      image: newsImage1,
    },
    {
      title: "Company Anniversary Celebration",
      date: "May 10, 2024",
      description: "Join us to the Raman Classes to get bright future",
      image: newsImage2,
    },
    {
      title: "Tech Meeting 2024",
      date: "June 20-22, 2024",
      description: "Join us to the Raman Classes to get bright future",
      image: newsImage3,
    },
  ];

  const firstSection = newsAndEvents.slice(0, 5);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-5 text-center">Classes Events</h1>

      <div className="flex flex-wrap gap-6 mb-8 justify-center">
        {firstSection.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 w-full h-[250px] hover:scale-105 transform transition duration-300 ease-in-out"
                />
                {/* Add hover effect to scale the image */}
              </div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500 mb-2">{item.date}</p>
              <p>{item.description}</p>
              <button className="mt-4 justify-end" style={{ color: "red" }}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="text-center justify-center  flex m-auto"
        style={{
          color: "red",
          border: "1px solid black",
          padding: "5px",
          backgroundColor: "#fff9e8",
          borderRadius: "5px",
        }}
      >
        Read More
      </button>
    </div>
  );
};

export default NewsAndEvents;
