import React from "react";
import GreenOKButton from "./GreenOKButton";
const ErrorComp = (props) => {
  const { isError, onHide } = props;
  return (
    <div style={styles.errorCont}>
      <div style={styles.messageCont}>
        <div style={styles.textCont}>
          <h1> Ohh No Something Went Wrong!!</h1>
          <h1>Status Code: {isError?.trace?.response.status}</h1>
          <h2>Message: {isError?.trace?.response.data.message}</h2>
        </div>
        <div style={styles.buttonCont}>
          <GreenOKButton text="Refresh" controlMethod={onHide} />
        </div>
      </div>
    </div>
  );
};
const styles = {
  errorCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    width: "30%",
  },
  messageCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "whiteSmoke",
    border: ".4rem solid red",
    borderRadius: "1rem",
    padding: "1rem",
  },
};
export default ErrorComp;
