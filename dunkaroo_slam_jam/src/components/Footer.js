import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <MainFooter>
      <h3>FESTIVAL</h3>
      <ul>
        <li>Tickets</li>
        <li>Merch</li>
        <li>Partners</li>
      </ul>

      <h3>HELP</h3>
      <ul>
        <li>Contact</li>
        <li>Information</li>
      </ul>

      <h3>SOCIAL</h3>
      <ul>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Reddit</li>
      </ul>
    </MainFooter>
  );
}

export default Footer;

const MainFooter = styled.div`
  display: flex;
  background: black;
  color: white;
  width: 100vw;
  height: 400px;
  border: 1px solid red;
`;
