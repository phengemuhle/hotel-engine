import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
  const [searchBarInput, setSearchBarInput] = useState("");
  const [searchRepoResult, setSearchRepoResult] = useState("");
  const [perPage, setPerPage] = useState();
  const [pageNumber, setPageNumber] = useState();
  const [resultSort, setResultSort] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    props.setSearchResults(searchRepoResult?.data?.items);
  }, [searchRepoResult]);
  const handleChange = (e) => {
    setSearchBarInput(e.target.value);
  };

  const handleSort = (e) => {
    setResultSort(e.target.value);
  };
  const handleLanguage = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleSearch = async () => {
    console.log(searchBarInput);
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
    console.log(result);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        maxLength="100"
        value={searchBarInput}
        onChange={handleChange}
      />
      <select value={resultSort} onChange={handleSort}>
        <option defaultValue="null">Best Match</option>
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="help-wanted-issues">Help wanted issues</option>
        <option value="updated">Updated</option>
      </select>
      <select value={selectedLanguage} onChange={handleLanguage}>
        <option defaultValue="">All</option>
        <option value="C">C</option>
        <option value="C++">C++</option>
        <option value="C#">C#</option>
        <option value="Go">Go</option>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Ruby">Ruby</option>
        <option value="Scala">Scala</option>
        <option value="TypeScript">TypeScript</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
