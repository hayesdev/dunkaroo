import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <MainHeader>
      <MenuIcon />
      <HeaderTitle>
        Dunkaroo Slam Jam
        <TitleInfo>
          <p>August 5-6, 2021</p>
          <p>Shreveport, LA</p>
        </TitleInfo>
      </HeaderTitle>
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
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  height: 100%;
  font-size: 30px;
  font-weight: 800;
  /* border: 3px solid red; */
`;

const HeaderButton = styled.button`
  background: #d4ef0e;
  height: 40px;
  width: 100px;
  border-radius: 40px;
  padding-right: 5px;
  margin-right: 20px;
`;

const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  margin-left: 5px;
  > p {
    font-size: 11px;
    font-weight: 350;
    margin: 0;
  }
`;
