import React from 'react';
import styled from 'styled-components';


// Styled components
const Section = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 30px;
  width: 400px;
  min-height: 380px;
  transform: translateY(20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  box-shadow: 0px 0 31px 0px rgb(0 0 0 / 10%);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;

const Image = styled.img`
  width: 100px;
`;

const Card = styled.div`
  width: 70%;
`;

const Title = styled.h1`
  margin: 20px 0 0 0;
  font-size: 3rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: var(--purple);
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: var(--pink);
`;

const Description = styled.p`
  width: 100%;
  margin: 20px 0;
  font-size: 1.2rem;
  text-align: center;
  color: var(--purple);
  line-height: 1.3rem;
`;

const BuyButton = styled.button`
  border: none;
  padding: 7px 20px;
  width: 50%;
  border-radius: 10px;
  font-size: 1.2rem;
  background-image: linear-gradient(43deg, var(--pink) 0%, var(--purple) 100%);
  color: white;
  font-weight: 600;
  box-shadow: 0px 8px 15px rgb(0 0 0 / 10%);
`;

// Card component
const CardComponent = () => {
  return (
    <Section>
    
      <Image src="https://cdn.pixabay.com/photo/2021/04/25/02/43/milk-shake-6205399_1280.png" alt="" />
      <Card>
        <Title>Shake</Title>
        <Price>$ 5.00</Price>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet</Description>
      </Card>
      <BuyButton>ADD TO CART</BuyButton>
    </Section>
  );
};

export default CardComponent;
