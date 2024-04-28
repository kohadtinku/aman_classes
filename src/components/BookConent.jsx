import React from 'react';
import styled from 'styled-components';

// Define styled components


const Woolf = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://i.imgur.com/vxGALKl.png");
  background-position: top left;
  background-size: 500px;
  background-repeat: no-repeat;
  z-index: 0;
  mix-blend-mode: hard-light;
  opacity: 0.8;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  filter: drop-shadow(5px 5px 25px black);
`;

const Content = styled.div`
  position: relative;
  top: 10px;
  background: url("https://i.imgur.com/0kjMcUe.png");
  background-size: 1000px;
  background-position: center right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: auto;
  padding: 30px 80px 50px 80px;
  z-index: 1;
  filter: brightness(0.95) sepia(30%) saturate(80%);
  border-radius: 30px;
  height: 90vh;
  clip-path: polygon(
    0% 0%,
    0% 93%,
    5% 98%,
    6% 99%,
    8% 95%,
    12% 94%,
    15% 97%,
    17% 93%,
    20% 98%,
    22% 97%,
    25% 99%,
    31% 94%,
    35% 93%,
    39% 96%,
    43% 93%,
    45% 94%,
    47% 95%,
    50% 92%,
    52% 96%,
    54% 93%,
    58% 92%,
    60% 95%,
    62% 93%,
    65% 96%,
    69% 93%,
    72% 93%,
    75% 94%,
    79% 97%,
    81% 94%,
    85% 93%,
    88% 92%,
    90% 95%,
    93% 93%,
    95% 92%,
    97% 95%,
    100% 97%,
    100% 0%
  );
  overflow: auto;
`;

const H1 = styled.h1`
  font-family: "Yellowtail", cursive;
  font-size: 80pt;
  margin: 0;
  font-weight: 1;
  color: #26231e;
  mix-blend-mode: color-burn;
`;

const Hr = styled.hr`
  width: 80%;
  opacity: 0.7;
  margin-top: 20px;
  margin-bottom: -60px;
  border-radius: 50px;
  padding: 40px;
`;

const H2 = styled.h2`
  font-size: 30pt;
  font-weight: 300;
  color: #35312b;
  text-shadow: 0.3px 0.3px 2px Sienna;
`;

const H3 = styled.h3`
  text-decoration: 1px dashed underline #888;
  letter-spacing: 2px;
  font-size: 20pt;
  font-weight: 300;
  font-style: italic;
  color: #35312b;
  margin-bottom: 40px;
  text-shadow: 0.6px 0.6px 1px Sienna;
`;

const P = styled.p`
  font-size: 16pt;
  font-weight: 400;
  line-height: 28pt;
  color: #565046;
  letter-spacing: 0.5px;
  word-spacing: 3px;
  text-shadow: 0.2px 0.2px 1.3px Sienna;

  &:first-of-type {
    align-self: flex-start;
    font-weight: 600;
    position: relative;
  }
`;

const Span = styled.span`
  font-family: "Sassy Frass", cursive;
  font-size: 600%;
  font-weight: 1;
  opacity: 0.8;
`;

// BookContent component
const BookContent = () => {
  return (
    <div>
  

      <ContentContainer>
        <Content>

          <H1>Mrs. Dalloway</H1>
          <Hr />
          <H2>by Virginia Woolf</H2>

          <H3>An Excerpt from Chapter One</H3>

          <P><Span>M</Span>rs. Dalloway said she would buy the flowers herself.</P>

          <P>For Lucy had her work cut out for her. The doors would be taken off their hinges; Rumpelmayer's men were coming. And then, thought Clarissa Dalloway, what a morning--fresh as if issued to children on a beach.</P>

          {/* Additional paragraphs here */}

        </Content>
      </ContentContainer>
    </div>
  );
};

export default BookContent;
