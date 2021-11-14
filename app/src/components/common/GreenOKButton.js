import React from "react";
import "../Global.css";

const GreenOKButton = ({ text, controlMethod }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={controlMethod}
      className="greenButton shared dualslide"
    >
      <span>{text}</span>
    </div>
  );
};

export default GreenOKButton;
