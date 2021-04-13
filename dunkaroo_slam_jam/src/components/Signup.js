import React from "react";
import styled from "styled-components";

function Signup() {
  return (
    <SectionContainer>
      <SignupTitle>
        <h1>Sign up for Updates</h1>
        <p>
          Get updates year-round, dank deals, raffles, baffles, gravy and so
          much more.
        </p>
      </SignupTitle>
      <SignupForm />
    </SectionContainer>
  );
}

export default Signup;

const SectionContainer = styled.div`
  display: flex;
  background: blue; // linear gradient
  width: 100vw;
  height: 380px;
`;

const SignupTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const SignupForm = styled.div``;
