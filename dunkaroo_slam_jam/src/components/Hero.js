import React from "react";
import styled from "styled-components";
import image from "../assets/dsj_hero1.jpg";

function Hero() {
  return (
    <HeroImage>
      {/* <img src={image} alt="a music concert" /> */}
      <div>
        <div>THIS IS WHERE LINEUP GOES</div>
        <button>Buy Tickets</button>
      </div>
    </HeroImage>
  );
}

export default Hero;

const HeroImage = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 80vh;
  background-image: url(${image});
  background-size: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  /* background: #fb3298; */
  /* > img {
    width: 100vw;
    height: 50%;
  } */
  > div {
    display: flex;
    justify-content: center;
    color: white;
    bottom: 28em;
    z-index: 1;
    width: 99vw;
    height: 200px;
    border: 3px solid red;
  }

  > div > button {
    background: #d4ef0e;
    height: 40px;
    width: 100px;
    border-radius: 40px;
  }
`;
