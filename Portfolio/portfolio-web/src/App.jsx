import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import WorkExperience from "./components/WorkExperience/WorkExperience";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
      <Skills/>
      <WorkExperience/>
      <Footer/>
    </>
  );
}
export default App ;