import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

function VideoOne() {
  return (
    <SectionContainer>
      <Info>
        <h1>Outdoor Adventures</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis
          ducimus iste sint quibusdam maxime corporis magnam nulla voluptate
          sapiente!
        </p>
        <SeeLineupBtn>See Lineup</SeeLineupBtn>
      </Info>
      <VideoContainer>
        <ReactPlayer url="https://www.youtube.com/watch?v=Vs-H-WGbosQ&ab_channel=HARDFEST" />
      </VideoContainer>
    </SectionContainer>
  );
}

export default VideoOne;

const SectionContainer = styled.div`
  display: flex;
  background: black;
  color: white;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 400px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  > h1 {
    color: #fb3299;
  }
`;

const VideoContainer = styled.div`
  display: flex;

  width: 45%;
  /* border: 2px solid white; */
`;

const SeeLineupBtn = styled.button`
  background: white;
  height: 40px;
  width: 100px;
  margin-top: 20px;
  border-radius: 40px;
  padding-right: 5px;
`;
