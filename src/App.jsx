import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Result from "./Components/Result/Result";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/IVF" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
