import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";

const ParallaxSection = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxContainer = parallaxRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      parallaxContainer.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ParallaxContainer ref={parallaxRef}>
      <ParallaxImage src={img1} alt="Image 1" />
      <ParallaxImage src={img2} alt="Image 2" />
    </ParallaxContainer>
  );
};

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const ParallaxImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
`;

export default ParallaxSection;
