import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import HomePage from "./components/HomePage";
import AreYouSurePage from "./components/AreYouSurePage";

export default function App() {
  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/areYouSure" element={<AreYouSurePage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
