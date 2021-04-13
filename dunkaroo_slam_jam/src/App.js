import React from "react";
import Header from "./components/Header";

import "./App.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import VideoSectionOne from "./components/VideoSectionOne";
import VideoSectionTwo from "./components/VideoSectionTwo";
import VideoSectionThree from "./components/VideoSectionThree";
import Hero from "./components/Hero";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* USE SCOOBY DOO RUH ROH FOR ANYTHING CLICKABLE (besides menu and tickets) */}
      <Header />
      <Hero />
      <SectionOne />
      <VideoSectionOne />
      <VideoSectionTwo />
      <VideoSectionThree />
      <SectionTwo />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
