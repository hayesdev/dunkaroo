import React from "react";
import styled from "styled-components";

function SectionOne() {
  return (
    <SectionContainer>
      <Info>
        <h1>Premium Upgrades</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis
          ducimus iste sint quibusdam maxime corporis magnam nulla voluptate
          sapiente!
        </p>
        <LearnMoreBtn>Learn More</LearnMoreBtn>
      </Info>
      <PhotoContainer>
        <img src="" />
      </PhotoContainer>
    </SectionContainer>
  );
}

export default SectionOne;

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
  width: 55%;
  padding-left: 20px;
  > h1 {
    color: #fb3299;
  }
  /* border: 2px solid white; */
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 45vw;
  /* border: 2px solid white; */
`;

const LearnMoreBtn = styled.button`
  background: white;
  height: 40px;
  width: 100px;
  margin-top: 20px;
  border-radius: 40px;
  padding-right: 5px;
`;
