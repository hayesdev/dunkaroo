import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

function MainVideo() {
  return (
    <VideoSection>
      <VideoContainer>
        <ReactPlayer url="https://www.youtube.com/watch?v=ULnEoqPl-3c&ab_channel=Lorraine" />
      </VideoContainer>
    </VideoSection>
  );
}

export default MainVideo;

const VideoSection = styled.div`
  display: flex;
  background: linear-gradient(#fb6907, #fb3298);
  color: white;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  padding-top: 20px;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 65%;
  height: 100%;
  /* border: 1px solid red; */
  margin-top: 0;
`;
