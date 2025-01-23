import React, { useEffect } from "react";
import "./App.scss";
import Landing from "./components/landing/Landing.js";
import Footer from "./components/landing/footer/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
