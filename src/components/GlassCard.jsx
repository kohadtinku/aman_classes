import React from "react";
import styled from "styled-components";
import admission from "../data/admission";

const GlassCard = () => {
  return (
    <div>
      <Card>
        <marquee width="60%" direction="up" height="350px">
          <div>
            {admission.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                {item.description && <p>{item.description}</p>}
                {item.isNew && <span>NEW</span>}
                {item.subItems && (
                  <ul>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </marquee>
      </Card>
    </div>
  );
};

const Card = styled.div`
  background: #e5e5e5;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 51px;
  margin: 26px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
  width: 500px;
  line-height: 30px;

  /* Optional: Add transition for smoother hover effect */
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px 0 rgba(31, 38, 135, 0.37);
  }
`;

export default GlassCard;
