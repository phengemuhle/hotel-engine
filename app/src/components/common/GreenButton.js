import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";

const GreenButton = () => {
  return (
    <>
      <Link to={`/search`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="greenButton shared dualslide"
        >
          <span>Accept</span>
        </div>
      </Link>
    </>
  );
};

export default GreenButton;
