import React from "react";
import Header from "./components/Header";

import "./App.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import VideoSectionOne from "./components/VideoSectionOne";
import VideoSectionTwo from "./components/VideoSectionTwo";
import VideoSectionThree from "./components/VideoSectionThree";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SectionOne />
      <VideoSectionOne />
      <VideoSectionTwo />
      <VideoSectionThree />
      <SectionTwo />
    </div>
  );
}

export default App;
