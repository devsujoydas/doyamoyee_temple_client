import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Volunteer from "./components/Volunteer";
import Notice from "./components/Notice";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-family-hindSiliguri">
      <Header />
      <Hero />
      <About />
      <Events />
      <Volunteer />
      <Notice />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;