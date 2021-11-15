import React, { useEffect } from "react";
import "../common/ResultTable.css";

const ResultDisplay = (props) => {
  const { searchResults, setSelectedRepo, setSelected } = props;
  const { innerWidth: windowWidth } = window;
  useEffect(() => {}, [windowWidth]);
  const handelSelect = (repo) => {
    setSelected(true);
    setSelectedRepo(repo);
  };
  const tableRow = searchResults?.map((repo, i) => {
    return (
      <tr key={repo.id}>
        {windowWidth > 500 ? <td className="id">{repo.id}</td> : null}
        <td className="name">{repo.name}</td>
        {windowWidth > 500 ? (
          <td className="stars">{repo.stargazers_count}</td>
        ) : null}
        {windowWidth > 500 ? (
          <td className="language">{repo.language}</td>
        ) : null}
        <td>
          <button onClick={() => handelSelect(repo)}>View Repo</button>
        </td>
      </tr>
    );
  });

  return (
    <div style={styles.mainContainer}>
      <table>
        <thead>
          <tr>
            {windowWidth > 500 ? <th className="id">ID</th> : null}
            <th className="name">Name</th>
            {windowWidth > 500 ? <th className="stars">Stars</th> : null}
            {windowWidth > 500 ? <th className="language">Language</th> : null}
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {searchResults?.length === 0 ? (
            <>
              <tr key="noSearch">
                <td></td>
                <td></td>
                <td>Please try your search again.</td>
                <td></td>
                <td></td>
              </tr>
            </>
          ) : (
            [tableRow]
          )}
        </tbody>
      </table>
    </div>
  );
};
const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    border: ".2rem solid darkBlue",
    position: "relative",
    padding: ".2rem",
    overFlow: "hidden",
  },
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    width: "10%",
  },
  resultRowCont: {
    position: "absolute",
    with: "100%",
    height: "100%",
    overflow: "scroll",
  },
  resultRow: {
    display: "flex",
    height: "2rem",
    minWidth: "90%",
  },
  table: {
    with: "100%",
    height: "100%",
    display: "block",
  },
  tableRow: { minWidth: "90%" },
  tableCell: { minWidth: "30%" },
};

export default ResultDisplay;
