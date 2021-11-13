import React from "react";

const DividerLine = () => {
  return <div style={styles.line}></div>;
};
const styles = {
  line: {
    backgroundColor: "darkBlue",
    height: ".2rem",
    width: "90%",
    marginTop: ".5rem",
    marginBottom: ".5rem",
  },
};

export default DividerLine;
