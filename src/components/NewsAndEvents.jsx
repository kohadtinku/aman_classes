// import React from "react";
// const NewsAndEvents = () => {
//   // Sample data for news and events
//   const newsAndEvents = [
//     {
//       title: "New Product Launch Event",
//       date: "April 15, 2024",
//       description: "Join us for the launch event of our latest product line!",
//     },
//     {
//       title: "Company Anniversary Celebration",
//       date: "May 10, 2024",
//       description: "Celebrate our company's anniversary with us!",
//     },
//     {
//       title: "Tech Conference 2024",
//       date: "June 20-22, 2024",
//       description: "Participate in the biggest tech conference of the year!",
//     },
//     // Add more news and events here
//     // You can add up to 10 items
//   ];

//   // Split the news and events into two sections
//   const firstSection = newsAndEvents.slice(0, 5);
//   const secondSection = newsAndEvents.slice(5, 10);

//   return (
//     <div className="container mx-auto py-10">
//       <h1 className="text-4xl font-bold mb-5 text-center">News and Events</h1>

//       {/* First Section */}
//       <div className="grid gap-6 mb-8">
//         {firstSection.map((item, index) => (
//           <div key={index} className="bg-white rounded-lg p-6 shadow-md">
//             <h2 className="text-xl font-semibold">{item.title}</h2>
//             <p className="text-gray-500 mb-2">{item.date}</p>
//             <p>{item.description}</p>
//             <button style={{textAlign:"end"}}>Read More</button>
//           </div>
//         ))}
//       </div>

//       {/* Second Section */}
//       {/* <div className="grid gap-6">
//         {secondSection.map((item, index) => (
//           <div key={index} className="bg-white rounded-lg p-6 shadow-md">
//             <h2 className="text-xl font-semibold">{item.title}</h2>
//             <p className="text-gray-500 mb-2">{item.date}</p>
//             <p>{item.description}</p>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default NewsAndEvents;


import React from "react";
import newsImage1 from "../assets/e1.jpg"; // Import your images
import newsImage2 from "../assets/e2.jpg";
import newsImage3 from "../assets/e3.jpg";

const NewsAndEvents = () => {
  // Sample data for news and events
  const newsAndEvents = [
    {
      title: "Student Programme",
      date: "April 15, 2024",
      description: "Join us to the Raman Classes to get bright future",
      image: newsImage1, // Add image for the first news item
    },
    {
      title: "Company Anniversary Celebration",
      date: "May 10, 2024",
      description: "Join us to the Raman Classes to get bright future",
      image: newsImage2, // Add image for the second news item
    },
    {
      title: "Tech Metting 2024",
      date: "June 20-22, 2024",
      description: "Join us to the Raman Classes to get bright future",
      image: newsImage3, // Add image for the third news item
    },
    // Add more news and events here
    // You can add up to 10 items
  ];

  // Split the news and events into two sections
  const firstSection = newsAndEvents.slice(0, 5);
  // const secondSection = newsAndEvents.slice(5, 10); // Unused

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-5 text-center">News and Events</h1>

      {/* First Section */}
      <div className="flex flex-wrap gap-6 mb-8 justify-center">
        {firstSection.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img src={item.image} alt={item.title} className="mb-4 w-full h-[250px] "/>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500 mb-2">{item.date}</p>
              <p>{item.description}</p>
              <button className="mt-4 justify-end" style={{color:"red"}}>Read More</button>
            </div>
          </div>
        ))}
      </div>
      <button className="text-center justify-center  flex m-auto" style={{color:"red",border:"1px solid black",padding:"5px",backgroundColor:"#fff9e8",borderRadius:"5px"}}>Read More</button>
    </div>
  );
};

export default NewsAndEvents;
