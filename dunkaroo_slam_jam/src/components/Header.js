import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <MainHeader>
      <MenuIcon />
      <HeaderTitle>Dunkaroo Slam Jam</HeaderTitle>
      <HeaderButton>Tickets</HeaderButton>
    </MainHeader>
  );
}

export default Header;
const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#3282d4, #7142e4);
  color: white;
  height: 85px;
  width: 100vw;
  padding-left: 10px;
  padding-right: 5px;
`;

const HeaderTitle = styled.div`
  display: flex;
  width: 25vw;
`;

const HeaderButton = styled.button`
  background: #d4ef0e;
  height: 40px;
  width: 100px;
  border-radius: 40px;
  padding-right: 5px;
`;
