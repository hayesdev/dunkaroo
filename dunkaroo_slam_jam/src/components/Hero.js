import React from "react";
import styled from "styled-components";
import hero from "../assets/dsj_hero.jpg";

function Hero() {
  return (
    <HeroImage>
      <img src={hero} />
    </HeroImage>
  );
}

export default Hero;

const HeroImage = styled.div`
  width: 100vw;
  height: 25vh;
`;
