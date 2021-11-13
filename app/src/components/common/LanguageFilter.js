import React from "react";

const LanguageFilter = (props) => {
  const { selectedLanguage, setSelectedLanguage } = props;

  const handleLanguage = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div style={styles.languageCont}>
      <label htmlFor="LanguageSearch">Filter by Language</label>
      <select
        style={{ marginTop: ".2rem" }}
        value={selectedLanguage}
        onChange={handleLanguage}
      >
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
    </div>
  );
};

const styles = {
  languageCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    width: "10rem",
    margin: ".1rem",
  },
};

export default LanguageFilter;
