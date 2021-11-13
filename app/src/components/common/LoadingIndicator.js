import React from "react";

const LoadingIndicator = (props) => {
  return (
    <div style={{ ...styles.textCont }}>
      <p>Loading...</p>
    </div>
  );
};

const styles = {
  textCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    fontSize: "1.5rem",
    borderRadius: "4rem",
    border: "3px solid blue",
  },
};

export default LoadingIndicator;
