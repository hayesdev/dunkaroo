import React from "react";
import styled from "styled-components";
import image from "../assets/dsj_hero1.jpg";

function Hero() {
  return (
    <HeroImage>
      <img src={image} />
    </HeroImage>
  );
}

export default Hero;

const HeroImage = styled.div`
  width: 100vw;
  height: undefined;
  > img {
    width: 100vw;
    height: 100%;
  }
  border: 3px solid red;
`;
