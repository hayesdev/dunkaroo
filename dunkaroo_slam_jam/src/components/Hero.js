import React from "react";
import styled from "styled-components";
import image from "../assets/hero2.jpg";
import lineup from "../assets/bonnaroo_lineup.jpg";

function Hero() {
  return (
    <HeroImage>
      <MainContent>
        <Lineup>
          <img src={lineup} />{" "}
        </Lineup>
        <TicketContainer>
          <div>Just Announced: 2021 Lineup</div>
          <Tickets>2021 Tickets On Sale Now!</Tickets>
          <TicketBtn>Tickets</TicketBtn>
        </TicketContainer>
      </MainContent>
    </HeroImage>
  );
}

export default Hero;

const HeroImage = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 80vh;
  background-image: url(${image});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  z-index: 1;
  width: 99vw;
  height: 400px;
  /* border: 3px solid red; */
`;

const Lineup = styled.div`
  height: 450px;
  width: 350px;
  /* border: 3px solid red; */
  > img {
    height: 100%;
    width: 100%;
  }
`;

const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
`;

const Tickets = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const TicketBtn = styled.button`
  background: #d4ef0e;
  height: 40px;
  width: 100px;
  font-weight: 600;
  border-radius: 40px;
`;
