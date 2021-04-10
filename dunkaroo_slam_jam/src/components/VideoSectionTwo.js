import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

function VideoSectionTwo() {
  return (
    <SectionContainer>
      <Info>
        <h1>'Music & Entertainment'</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis
          ducimus iste sint quibusdam maxime corporis magnam nulla voluptate
          sapiente!
        </h3>
        <SeeLineupBtn>See Lineup</SeeLineupBtn>
      </Info>
      <VideoContainer>
        <ReactPlayer url="https://www.youtube.com/watch?v=Vs-H-WGbosQ&ab_channel=HARDFEST" />
      </VideoContainer>
    </SectionContainer>
  );
}

export default VideoSectionTwo;

const SectionContainer = styled.div`
  display: flex;
  background: black;
  color: white;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 400px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const VideoContainer = styled.div`
  display: flex;
  width: 60%;
`;

const SeeLineupBtn = styled.button`
  background: white;
  height: 40px;
  width: 100px;
  margin-top: 20px;
  border-radius: 40px;
  padding-right: 5px;
`;
