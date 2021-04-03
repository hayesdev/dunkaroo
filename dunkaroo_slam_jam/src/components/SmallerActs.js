import React from "react";
import styled from "styled-components";
import bands from "../bands";

function SmallerActs() {
  const { smallerActs } = bands[0];
  return (
    <SmallerAct>
      {smallerActs.map((band) => {
        return <h2>{band}</h2>;
      })}
    </SmallerAct>
  );
}

export default SmallerActs;

const SmallerAct = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-evenly;
`;
