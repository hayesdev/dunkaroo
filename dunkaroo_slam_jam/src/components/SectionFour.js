import React from "react";
import styled from "styled-components";
import image from "../assets/AG_roo.PNG";

function SectionFour() {
  return (
    <SectionContainer>
      <Info>
        <h1>Spread the Love</h1>
        <p>
          For Adrian Grenier. Spread the love for Adrian Grenier. I mean look at
          this beautiful he//him. God bless America. Or France. Is he from
          France? I mean the last name sounds French but he was probably born
          here, right? Either way, he won't be at the show, but we can always
          dream.
        </p>
        <LearnMoreBtn>Learn More</LearnMoreBtn>
      </Info>
      <PhotoContainer>
        <img src={image} />
      </PhotoContainer>
    </SectionContainer>
  );
}

export default SectionFour;

const SectionContainer = styled.div`
  display: flex;
  background: black;
  color: white;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 400px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 400px;
  padding-left: 20px;
  padding-right: 30px;
  z-index: 1;
  > h1 {
    color: #7a41ff;
  }
  > p {
    display: flex;
    flex-wrap: wrap;
  }
  /* border: 2px solid white; */
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 55%;
  height: 400px;
  margin-left: 35px;
  /* border: 2px solid white; */
  > img {
    width: 100%;
  }
`;

const LearnMoreBtn = styled.button`
  background: white;
  height: 40px;
  width: 100px;
  margin-top: 20px;
  border-radius: 40px;
  padding-right: 5px;
`;
