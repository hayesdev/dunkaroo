import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <MainFooter>
      <Section>
        <h3>FESTIVAL</h3>
        <a href="#">Tickets</a>
        <a href="#">Merch</a>
        <a href="#">Partners</a>
      </Section>

      <Section>
        <h3>HELP</h3>
        <a href="#">Contact</a>
        <a href="#">Information</a>
      </Section>

      <Section>
        <h3>SOCIAL</h3>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Reddit</a>
      </Section>
      {/* <FooterInfo>
        <a href="#">Dunkaroo</a>
        <a href="#">Privacy</a>
        <a href="#">Term & Conditions</a>
        <a href="#">Do Not Feed The Staff</a>
      </FooterInfo> */}
    </MainFooter>
  );
}

export default Footer;

const MainFooter = styled.div`
  display: flex;
  justify-content: space-around;
  background: black;
  color: white;
  width: 100vw;
  height: 400px;

  > div > a {
    text-decoration: none;
    color: white;
    margin-bottom: 10px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 300px;
`;

const FooterInfo = styled.div``;
