import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Blog from "./components/Blog";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container mx-auto px-4 select-none">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
