import React from "react";
import styled from "styled-components";
import latestNews from "../data/latestNews";

const NewsComponent = () => {
  return (
   
    <div>
        <Card>
        <marquee width="70%" direction="up" height="350px">
          <div>
            {latestNews.map((item, index) => (
              <div key={index} className="underline">
                <h2>{item}</h2>
                {/* Assuming `isNew` and `subItems` are not part of `latestNews` */}
              </div>
            ))}
          </div>
      </marquee>
        </Card>
    </div>
  );
};

const Card = styled.div`
  background: hsl(38.9deg 100% 82.16%);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 51px;
  margin: 26px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
  width: fit-content;
  line-height: 40px;
  color:black;
font-weight:700;
  /* Optional: Add transition for smoother hover effect */
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px 0 rgba(31, 38, 135, 0.37);
    text-decoration:underline;
  }
`;

export default NewsComponent;
