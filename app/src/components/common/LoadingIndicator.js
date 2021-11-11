import React from "react";

const LoadingIndicator = (props) => {
  return (
    <div style={{ ...styles.mainContainer }}>
      <div style={{ ...styles.textCont }}>
        <p>Loading...</p>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    flexDirection: "column",
    backgroundColor: "black",
  },
  textCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    fontSize: "3rem",
    borderRadius: "30%",
    backgroundColor: "white",
    border: "3px solid blue",
  },
};

export default LoadingIndicator;
