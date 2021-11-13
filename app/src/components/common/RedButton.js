import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";

const RedButton = (props) => {
  return (
    <>
      <Link to={`/areYouSure`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="redButton shared dualslide"
        >
          <span>Decline</span>
        </div>
      </Link>
    </>
  );
};

export default RedButton;
