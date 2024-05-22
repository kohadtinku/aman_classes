// import React, { useEffect } from "react";
// import styled from "styled-components";
// import latestNews from "../data/latestNews";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Background from "./Background";
// const NewsComponent = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//     });
//   });
//   return (
//     <>
//       <div data-aos="zoom-in">
//         <Card>
//               {/* <Background /> */}
//           <marquee width="70%" direction="up" height="350px">
//             <div>
//               {latestNews.map((item, index) => (
//                 <div key={index} className="underline">
//                   <h2>{item}</h2>
//                   {/* Assuming `isNew` and `subItems` are not part of `latestNews` */}
//                 </div>
//               ))}
//             </div>
//           </marquee>
//         </Card>
//       </div>
//     </>
//   );
// };

// const Card = styled.div`
//   background: hsl(38.9deg 100% 82.16%);
//   backdrop-filter: blur(10px);
//   border-radius: 10px;
//   padding: 51px;
//   margin: 26px;
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   border-radius: 10px;
//   border: 1px solid rgba(255, 255, 255, 0.18);
//   transition: all 0.3s ease;
//   width: fit-content;
//   line-height: 40px;
//   color: black;
//   font-weight: 700;
//   /* Optional: Add transition for smoother hover effect */
//   transition: all 0.3s ease;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 4px 20px 0 rgba(31, 38, 135, 0.37);
//     text-decoration: underline;
//   }
// `;

// export default NewsComponent;

// import React, { useEffect } from "react";
// import styled from "styled-components";
// import latestNews from "../data/latestNews";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../style/topbar.css"; // Ensure this file exists or remove this line if unnecessary

// const NewsComponent = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//     });
//   }, []);

//   return (
//     <div data-aos="zoom-in">
//       <Card>
//         <NewsTicker>
//           <TickerContent>
//             {latestNews.map((item, index) => (
//               <NewsItem key={index}>
//                 <h2>{item}</h2>
//               </NewsItem>
//             ))}
//           </TickerContent>
//         </NewsTicker>
//       </Card>
//     </div>
//   );
// };

// const Card = styled.div`
//   background: hsl(38.9deg 100% 82.16%);
//   backdrop-filter: blur(10px);
//   border-radius: 10px;
//   padding: 51px;
//   margin: 26px;
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   border: 1px solid rgba(255, 255, 255, 0.18);
//   width: 600px;
//   color: black;
//   font-weight: 700;
//   line-height: 20px;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 4px 20px 0 rgba(31, 38, 135, 0.37);
//     text-decoration: underline;
//   }
//   @media (max-width: 425px) {
//   width:350px;
//   height:350px
//   }
// `;

// const NewsTicker = styled.div`
//   width: 100%;
//   height: 350px;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   position: relative;
//   @media (max-width: 425px) {
//   ${'' /* width:250px; */}
//   height:250px
//   }
// `;

// const TickerContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   animation: scrollUp 15s linear infinite;

//   @keyframes scrollUp {
//     0% {
//       transform: translateY(100%);
//     }
//     100% {
//       transform: translateY(-100%);
//     }
//   }
// `;

// const NewsItem = styled.div`
//   padding: 10px 0;
//   white-space: nowrap;
//   text-wrap:wrap;
//   ${'' /* height:250px; */}
// `;

// export default NewsComponent;









import React, { useEffect } from "react";
import styled from "styled-components";
import latestNews from "../data/latestNews";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Container data-aos="zoom-in">
      <Card>
        <Table>
        <NewsTicker>
        <TickerContent>
          <tbody>
            {latestNews.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item}</TableCell>
                <TableCell>
                  <Button href="#">Click Here</Button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
          </TickerContent>
          </NewsTicker>
        </Table>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  background: hsl(38.9deg 100% 82.16%);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 600px;
  color: black;
  font-weight: 700;
  line-height: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px 0 rgba(31, 38, 135, 0.37);
    text-decoration: underline;
  }

  @media (max-width: 425px) {
    width: 350px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const Button = styled.a`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #45a049;
  }
`;

const TickerContent = styled.div`
  display: flex;
  flex-direction: column;
  animation: scrollUp 20s linear infinite;

  @keyframes scrollUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;

 const NewsTicker = styled.div`
   width: 100%;
   height: 350px;
   overflow: hidden;
   display: flex;
   align-items: center;
   position: relative;
   @media (max-width: 425px) {
   ${'' /* width:250px; */}
   height:250px
   }
 `;

export default NewsComponent;
