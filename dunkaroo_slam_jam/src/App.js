import React from "react";
import Header from "./components/Header";

import "./App.css";
import MainSection from "./components/MainSection";
import VideoThree from "./components/VideoThree";
import MainVideo from "./components/MainVideo";
import VideoOne from "./components/VideoOne";
import VideoTwo from "./components/VideoTwo";
import Hero from "./components/Hero";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      {/* USE SCOOBY DOO RUH ROH FOR ANYTHING CLICKABLE (besides menu and tickets) */}
      <Header />
      <Hero />
      <MainSection />
      <MainVideo />
      <VideoOne />
      <VideoTwo />

      <VideoThree />
      <Signup />
      <Footer />
    </main>
  );
}

export default App;
