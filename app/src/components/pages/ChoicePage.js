import React, { useState } from "react";
import SearchPage from "./SearchPage";
import SelectedRepoPage from "./SelectedRepoPage";

const ChoicePage = () => {
  const [isSelected, setSelected] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState();

  return (
    <>
      {isSelected ? (
        <SelectedRepoPage
          selectedRepo={selectedRepo}
          setSelected={setSelected}
        />
      ) : (
        <SearchPage
          setSelectedRepo={setSelectedRepo}
          setSelected={setSelected}
        />
      )}
    </>
  );
};

export default ChoicePage;
