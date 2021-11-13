import React from "react";

const NameInput = (props) => {
  const { handleKeyPress, searchBarInput, handleChange } = props;

  return (
    <div style={styles.nameCont}>
      <label htmlFor="nameSearch">Repository Name Search:</label>
      <input
        id="nameSearch"
        type="text"
        placeholder="Search..."
        maxLength="100"
        onKeyDown={handleKeyPress}
        value={searchBarInput}
        onChange={handleChange}
        style={{ marginTop: ".2rem" }}
      />
    </div>
  );
};

const styles = {
  nameCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    width: "40rem",
    margin: ".1rem",
  },
};

export default NameInput;
