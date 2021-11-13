import React from "react";

const ResultSortDropdown = (props) => {
  const handleSort = (e) => {
    props.setResultSort(e.target.value);
  };

  return (
    <div style={styles.resultCont}>
      <label htmlFor="resultSort">Sort By:</label>
      <select
        style={{ marginTop: ".2rem" }}
        id="resultSort"
        value={props.resultSort}
        onChange={handleSort}
      >
        <option defaultValue="null">Best Match</option>
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="help-wanted-issues">Help wanted issues</option>
        <option value="updated">Updated</option>
      </select>
    </div>
  );
};

const styles = {
  resultCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    width: "10rem",
    margin: ".1rem",
  },
};

export default ResultSortDropdown;
