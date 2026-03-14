import { memo } from "react";
import { Link } from "react-router-dom";

const SettingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>⚙ Settings</h1>
      <p style={styles.text}>Coming Soon...</p>
      <br />
      <p>Leave a message or suggestion...</p>
      <textarea
        placeholder="Thank you!"
        name=""
        style={styles.txtArea}
      ></textarea>
      <Link to={"/"}>
        <button style={styles.homeBtn}>Go to Home</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  txtArea: {
    border: "1px solid white",
    backgroundColor: "black",
    color: "white",
    padding: "4px",
    margin: "5px",
    textAlign: "center",
  },
  homeBtn: {
    padding: "4px",
    backgroundColor: "black",
    borderRadius: "4px",
    border: "2px solid white",
    color: "white",
    cursor: "pointer",
  },
};

export default memo(SettingPage);
