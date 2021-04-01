import React from "react";
import bands from "../bands";
import styled from "styled-components";

function Headliners() {
  console.log(bands);
  return (
    <Headliner>
      {bands[0].bigBands.map((band) => {
        return <h1>{band}</h1>;
      })}
    </Headliner>
  );
}

export default Headliners;

const Headliner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-evenly;
  border: 1px solid red;
`;
