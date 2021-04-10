import React from "react";
import styled from "styled-components";
import image from "../assets/dsj_hero1.jpg";

function Hero() {
  return (
    <HeroImage>
      <img src={image} alt="a music concert" />
    </HeroImage>
  );
}

export default Hero;

const HeroImage = styled.div`
  width: 100vw;
  height: undefined;
  background: #fb3298;
  > img {
    width: 100vw;
    height: 100%;
  }
`;
