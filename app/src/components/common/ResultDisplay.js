import React from "react";
import LoadingIndicator from "./LoadingIndicator";
import Table from "react-bootstrap/Table";

const ResultDisplay = (props) => {
  const { isLoading, searchResults } = props;
  console.log(searchResults);
  const ResultRow = searchResults?.map((result, index) => {
    const rowColor = index % 2 == 0 ? "white" : "lightGrey";
    return (
      <tr style={styles.tableRow}>
        <td style={styles.tableCell}>{result.id}</td>
        <td style={styles.tableCell}>{result.name}</td>
        <td style={styles.tableCell}>{result.stargazers_count}</td>
        <td style={styles.tableCell}>{result.language}</td>
      </tr>
    );
  });
  return (
    <div style={styles.mainContainer}>
      {isLoading ? (
        <div style={styles.loading}>
          <LoadingIndicator />
        </div>
      ) : (
        <div style={styles.table}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Stars</th>
                <th>Languge</th>
              </tr>
            </thead>
            <tbody>{ResultRow}</tbody>
          </Table>
        </div>
        // <div style={styles.resultRowCont}>{ResultRow}</div>
      )}
      <div style={styles.buttonRow}></div>
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
    borderRadius: "1rem",
    position: "relative",
    // "-webkit-flex-flow": "column" /* doesn't work without prefix */,
    // flexFlow: "column",
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
    height: "2rem",
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
