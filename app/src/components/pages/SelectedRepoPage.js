import React from "react";
import DividerLine from "../common/DividerLine";

const SelectedRepoPage = (props) => {
  const { selectedRepo, setSelected } = props;
  const handelBack = () => {
    setSelected(false);
  };
  return (
    <div style={styles.mainContainer}>
      <div style={{ ...styles.headerContainer }}>
        <div>
          <h3 onClick={handelBack}>{"<-"} Back</h3>
        </div>
        <div>
          <h1>{selectedRepo.name}</h1>
        </div>
        <div>
          <a
            href={selectedRepo.clone_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Visit Github {"->"}</h3>
          </a>
        </div>
      </div>
      <DividerLine style={{ alignSelf: "center" }} />
      <div style={{ ...styles.infoContainer }}>
        <div>
          <h3>Author: {selectedRepo.owner.login}</h3>
        </div>
        <div>
          <h3>Language: {selectedRepo.language}</h3>
        </div>
        <div>
          <h3>Stars: {selectedRepo.stargazers_count}</h3>
        </div>
        <div>
          <h3>Forks: {selectedRepo.forks}</h3>
        </div>
        <div>
          <h3>
            Last Updated: {new Date().toDateString(selectedRepo.updated_at)}
          </h3>
        </div>
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
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    // textAlign: "center",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "90%",
    margin: "2rem",
  },
};
export default SelectedRepoPage;
