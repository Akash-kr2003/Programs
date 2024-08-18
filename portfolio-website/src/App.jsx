import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
      <Skills/>
      <Footer/>
    </>
  );
}
export default App ;