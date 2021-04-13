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
      <SignupForm type="form" placeholder="Email Address" />
    </SectionContainer>
  );
}

export default Signup;

const SectionContainer = styled.div`
  display: flex;
  background: linear-gradient(90deg, #3282d4, #7142e4);
  width: 100vw;
  height: 380px;
`;

const SignupTitle = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;

const SignupForm = styled.form``;
