import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/navbar";
import Home from './components/Landing/Home'
import About from './components/pages/About'
import Footer from "./components/Footer/Footer";
import Discover from "./components/pages/Discover";
import Services from "./components/pages/Services";
import Info from "./components/pages/Info";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Discover/>
      <Services/>
      <Info/>
      <Footer/>
  </div>

  );
}

export default App;
