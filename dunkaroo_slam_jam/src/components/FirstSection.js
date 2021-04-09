import React from "react";
import styled from "styled-components";

function FirstSection() {
  return (
    <SectionOne>
      <IntroSectionContainer>
        <Intro>
          Dunkaroo Slam Jam 2021 Introdution section Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis maxime cum odit provident deleniti
          illo quam est pariatur alias nulla!
          <ReadMoreBtn>Read More</ReadMoreBtn>
        </Intro>
        <JamFamBlock>
          Jam <br />
          Fam
        </JamFamBlock>
      </IntroSectionContainer>
    </SectionOne>
  );
}

export default FirstSection;

const SectionOne = styled.div`
  display: flex;
  background: linear-gradient(#fb3298, #fb6907);
  color: white;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 30vh;
  border: 1px solid red;
`;

const IntroSectionContainer = styled.div`
  display: flex;
  width: 90vw;
  height: 15vh;
`;

const ReadMoreBtn = styled.button`
  background: #d4ef0e;
  height: 40px;
  width: 100px;
  margin-top: 10px;
  border-radius: 40px;
  padding-right: 5px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const JamFamBlock = styled.div`
  width: 40%;
`;
