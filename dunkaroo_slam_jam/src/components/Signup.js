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
      <SignupForm>
        <input type="form" placeholder="Email Address"></input>
        <button>Sign up Now</button>
      </SignupForm>
    </SectionContainer>
  );
}

export default Signup;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #3282d4, #7142e4);
  width: 100vw;
  height: 380px;
`;

const SignupTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  border: 1px solid red;
`;

const SignupForm = styled.form`
  width: 200px;
  height: 100px;
`;
