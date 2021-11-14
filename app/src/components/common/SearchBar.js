import React, { useEffect, useState } from "react";
import axios from "axios";
import ResultSortDropdown from "./ResultSortDropdown";
import LanguageFilter from "./LanguageFilter";
import NameInput from "./NameInput";

const SearchBar = (props) => {
  const { setIsLoading, setIsError } = props;
  const [searchBarInput, setSearchBarInput] = useState("");
  const [searchRepoResult, setSearchRepoResult] = useState("");
  const [perPage, setPerPage] = useState();
  const [pageNumber, setPageNumber] = useState();
  const [resultSort, setResultSort] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    props.setSearchResults(searchRepoResult?.data?.items);
  }, [searchRepoResult]);

  const handleChange = (e) => {
    setSearchBarInput(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(
        "https://api.github.com/search/repositories",
        {
          params: {
            q: searchBarInput + `language:${selectedLanguage}`,
            per_page: perPage,
            page: pageNumber,
            sort: resultSort,
            language: "rails",
          },
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      setSearchRepoResult(result);
    } catch (error) {
      setIsError({ error: true, trace: error });
    }
    setIsLoading(false);
  };
  return (
    <div style={styles.serchBarCont}>
      <NameInput
        handleKeyPress={handleKeyPress}
        searchBarInput={searchBarInput}
        handleChange={handleChange}
      />
      <ResultSortDropdown
        resultSort={resultSort}
        setResultSort={setResultSort}
      />
      <LanguageFilter
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      <button style={styles.submitButton} type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

const styles = {
  serchBarCont: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
  },
  submitButton: {
    display: "flex",
    alignSelf: "flex-end",
    backgroundColor: "#4CAF50" /* Green */,
    border: "none",
    height: "60%",
    color: "white",
    padding: ".4rem 1.2rem",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "1rem",
    borderRadius: "1rem",
    margin: ".1rem",
  },
};

export default SearchBar;
