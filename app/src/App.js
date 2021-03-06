import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChoicePage from "./components/pages/ChoicePage";
import HomePage from "./components/pages/HomePage";
import AreYouSurePage from "./components/pages/AreYouSurePage";

const styles = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "whitesmoke",
  },
};

export default function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Routes>
          <Route path="/search" element={<ChoicePage />} />
          <Route path="/areYouSure" element={<AreYouSurePage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
