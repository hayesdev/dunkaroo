import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <MainHeader>
      <h2>Dunkaroo Slam Jam '21</h2>
      <h2>Get Tickets</h2>
    </MainHeader>
  );
}

export default Header;
const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  height: 5vw;
  border: 1px solid red;
`;
