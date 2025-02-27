import React from "react";
import styled from "styled-components";

function MainSection() {
  return (
    <SectionContainer>
      <IntroSectionContainer>
        <Intro>
          Dunkaroo Slam Jam 2021 <br />
          Strap the fuck in for the experience of a lifetime - Introdution
          section Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          maxime cum odit provident deleniti illo quam est pariatur alias nulla!
          <ReadMoreBtn>Read More</ReadMoreBtn>
        </Intro>
        <JamFamBlock>
          Jam <br /> Fam
        </JamFamBlock>
      </IntroSectionContainer>
    </SectionContainer>
  );
}

export default MainSection;

const SectionContainer = styled.div`
  display: flex;
  background: linear-gradient(#fb3298, #fb6907);
  color: white;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 30vh;
`;

const IntroSectionContainer = styled.div`
  display: flex;
  width: 90vw;
  height: 15vh;
`;

const ReadMoreBtn = styled.button`
  background: white;
  height: 40px;
  width: 100px;
  margin-top: 20px;
  border-radius: 40px;
  padding-right: 5px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const JamFamBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #74e93c;
  font-size: 60px;
  font-weight: 800;
  width: 40%;
`;
