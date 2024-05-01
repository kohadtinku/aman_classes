import React from "https://esm.sh/react";
import ReactDom from "https://esm.sh/react-dom";

const NewsAndEvents = () => {
  // Sample data for news and events
  const newsAndEvents = [
    {
      title: "New Product Launch Event",
      date: "April 15, 2024",
      description: "Join us for the launch event of our latest product line!",
    },
    {
      title: "Company Anniversary Celebration",
      date: "May 10, 2024",
      description: "Celebrate our company's anniversary with us!",
    },
    {
      title: "Tech Conference 2024",
      date: "June 20-22, 2024",
      description: "Participate in the biggest tech conference of the year!",
    },
    // Add more news and events here
    // You can add up to 10 items
  ];

  // Split the news and events into two sections
  const firstSection = newsAndEvents.slice(0, 5);
  const secondSection = newsAndEvents.slice(5, 10);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">News and Events</h1>

      {/* First Section */}
      <div className="grid gap-6 mb-8">
        {firstSection.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-500 mb-2">{item.date}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Second Section */}
      <div className="grid gap-6">
        {secondSection.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-500 mb-2">{item.date}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEvents;