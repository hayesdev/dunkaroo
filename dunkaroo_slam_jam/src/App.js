import React from "react";
import Header from "./components/Header";

import "./App.css";
import FirstSection from "./components/SectionOne";
import VideoSectionOne from "./components/VideoSectionOne";
import VideoSectionTwo from "./components/VideoSectionTwo";
import VideoSectionThree from "./components/VideoSectionThree";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FirstSection />
      <VideoSectionOne />
      <VideoSectionTwo />
      <VideoSectionThree />
    </div>
  );
}

export default App;
