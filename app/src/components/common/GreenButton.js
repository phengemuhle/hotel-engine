import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";

const GreenButton = ({ text = "Accept", link = `/search` }) => {
  return (
    <>
      <Link to={link}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="greenButton shared dualslide"
        >
          <span>{text}</span>
        </div>
      </Link>
    </>
  );
};

export default GreenButton;
