import React from "react";

const ResultDisplay = (props) => {
  return (
    <div style={styles.mainContainer}>
      <p className="questionText">
        Are you ready to meet the next React developer to join the <br />
        Hotel Engine team?
      </p>
      <div style={styles.buttonRow}></div>
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
    height: "100%",
    width: "100%",
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

export default ResultDisplay;
