import React, { useEffect, useState } from "react";
import LoadingIndicator from "./common/LoadingIndicator";
import SearchBar from "./common/SearchBar";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([1]);
  useEffect(() => {}, [searchResults]);

  const ResultRow = searchResults?.map((result) => {
    console.log(result.name);
    return (
      <div>
        <p>{result.name}</p>
      </div>
    );
  });

  return (
    <div style={{ ...styles.mainContainer }}>
      <SearchBar setSearchResults={setSearchResults} />
      {ResultRow}
      <LoadingIndicator />
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
    backgroundColor: "white",
  },
  //   mainContainer: {
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundColor: "white",
  //     flexDirection: "column",
  //   },
};

export default SearchPage;
