import React from "react";
import GreenButton from "../common/GreenButton";
import RedButton from "../common/RedButton";
import "../Global.css";

const HomePage = () => {
  return (
    <div style={styles.mainContainer}>
      <p className="questionText">
        Are you ready to meet the next React developer to join the <br />
        Hotel Engine team?
      </p>
      <div style={styles.buttonRow}>
        <GreenButton />
        <RedButton />
      </div>
    </div>
  );
};
const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    height: "60%",
    width: "60%",
    border: ".4rem solid darkBlue",
    borderRadius: "1rem",
  },
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default HomePage;
