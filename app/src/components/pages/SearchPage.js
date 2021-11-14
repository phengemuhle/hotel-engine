import React, { useEffect, useState } from "react";
import LoadingIndicator from "../common/LoadingIndicator";
import DividerLine from "../common/DividerLine";
import SearchBar from "../common/SearchBar";
import ResultDisplay from "./ResultDisplay";
import ErrorComp from "../common/ErrorComp";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isError, setIsError] = useState({ error: false, trace: null });
  useEffect(() => {}, [searchResults, isError]);

  return (
    <div style={styles.mainContainer}>
      {isError.error ? (
        <div style={styles.errorContainer}>
          <ErrorComp
            isError={isError}
            onHide={() => setIsError({ error: false, trace: null })}
          />
        </div>
      ) : null}
      <>
        <div style={{ ...styles.headerContainer }}>
          <h1>Welcome to my GitHub search</h1>
        </div>
        <DividerLine />
        <div style={{ width: "90%" }}>
          <SearchBar
            setIsLoading={setIsLoading}
            setSearchResults={setSearchResults}
            setIsError={setIsError}
          />
        </div>
        <div style={styles.resultContainer}>
          <ResultDisplay searchResults={searchResults} isLoading={isLoading} />
        </div>
      </>
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
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    zIndex: "1",
    position: "absolute",
  },
};

export default SearchPage;
