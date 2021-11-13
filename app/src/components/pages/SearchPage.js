import React, { useEffect, useState } from "react";
import LoadingIndicator from "../common/LoadingIndicator";
import DividerLine from "../common/DividerLine";
import SearchBar from "../common/SearchBar";
import ResultDisplay from "../common/ResultDisplay";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([1]);
  useEffect(() => {}, [searchResults]);

  return (
    <div style={styles.mainContainer}>
      <div style={{ ...styles.headerContainer }}>
        <h1>Welcome to my GitHub search</h1>
      </div>
      <DividerLine />
      <div style={{ width: "90%" }}>
        <SearchBar
          setIsLoading={setIsLoading}
          setSearchResults={setSearchResults}
        />
      </div>
      <div style={styles.resultContainer}>
        <ResultDisplay searchResults={searchResults} isLoading={isLoading} />
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    height: "95%",
    width: "95%",
    border: ".4rem solid darkBlue",
    borderRadius: "1rem",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
  resultContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "90%",
    margin: "2rem",
  },
};

export default SearchPage;
