import React from "react";
import styled from "styled-components";

function SectionTwo() {
  return (
    <SectionContainer>
      <PhotoContainer>
        <img src="" />
      </PhotoContainer>
      <Info>
        <h1>Campgrounds</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis
          ducimus iste sint quibusdam maxime corporis magnam nulla voluptate
          sapiente!
        </p>
      </Info>
    </SectionContainer>
  );
}

export default SectionTwo;

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
    color: #e7e803;
  }
  /* border: 2px solid white; */
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 45vw;
  /* border: 2px solid white; */
`;
