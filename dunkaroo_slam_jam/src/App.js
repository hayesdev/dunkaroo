import React from "react";
import Header from "./components/Header";
import Hero from "./assets/dsj_hero.jpg";
import "./App.css";
import FirstSection from "./components/SectionOne";
import VideoSectionOne from "./components/VideoSectionOne";
import VideoSectionTwo from "./components/VideoSectionTwo";

function App() {
  return (
    <div>
      <Header />
      <FirstSection />
      <VideoSectionOne />
      <VideoSectionTwo />
      {/* <Hero /> */}
    </div>
  );
}

export default App;
