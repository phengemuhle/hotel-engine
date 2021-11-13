import React from "react";
import GreenButton from "../common/GreenButton";
import "../Global.css";

const AreYouSurePage = () => {
  return (
    <div style={styles.mainContainer}>
      <div>
        <p className="questionText">Let's try that again...</p>
        <p className="questionText">
          Are you ready to meet the next React developer to join the <br />
          Hotel Engine team?
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "columm" }}>
        <GreenButton />
      </div>
    </div>
  );
};
const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: "100%",
    color: "white",
    flexDirection: "column",
  },
};

export default AreYouSurePage;
