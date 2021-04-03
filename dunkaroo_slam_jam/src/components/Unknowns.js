import React from "react";
import styled from "styled-components";
import bands from "../bands";

function Unknowns() {
  const { unknowns } = bands[0];
  return (
    <Unknown>
      {unknowns.map((band) => {
        return <h3>{band}</h3>;
      })}
    </Unknown>
  );
}

export default Unknowns;

const Unknown = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-evenly;
`;
