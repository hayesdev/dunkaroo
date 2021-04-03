import React from "react";
import bands from "../bands";
import styled from "styled-components";

function Headliners() {
  console.log(bands);
  const { day, bigBands } = bands[0];
  return (
    <Headliner>
      <h1>{day}</h1>
      {bigBands.map((band) => {
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
`;
