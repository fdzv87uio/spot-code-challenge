import { Link } from "react-router-dom";

export default function CustomHeader({ currentView }) {
  console.log(currentView);
  return (
    <div style={styles.header}>
      <div style={styles.logo}>SPOT</div>
      <div style={styles.headerControls}>
        {currentView === "home" && (
          <Link to="/">
            <div style={styles.headerLinkActive}>Home</div>
          </Link>
        )}
        {currentView !== "home" && (
          <Link to="/">
            <div style={styles.headerLinkInactive}>Home</div>
          </Link>
        )}

        {currentView === "secondary" && (
          <Link to="/secondary-page">
            <div style={styles.headerLinkActive}>Product List</div>
          </Link>
        )}
        {currentView !== "secondary" && (
          <Link to="/secondary-page">
            <div style={styles.headerLinkInactive}>Product List</div>
          </Link>
        )}
      </div>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "#ffffff",
    zIndex: 99,
    position: "fixed",
    top: "0",
    width: "95%",
    height: "70px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  logo: {
    fontSize: "1.4rem",
    fontFamily: "sans-serif",
    fontWeight: "bolder",
    color: "#000000",
  },
  headerControls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  },
  headerLinkActive: {
    width: "100px",
    height: "auto",
    fontSize: "1rem",
    fontFamily: "sans-serif",
    fontWeight: "normal",
    color: "#ffffff",
    backgroundColor: "#999999",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
    padding: "5px 10px",
  },
  headerLinkInactive: {
    width: "100px",
    height: "auto",
    fontSize: "1rem",
    fontFamily: "sans-serif",
    fontWeight: "normal",
    color: "#777777",
    backgroundColor: "none",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
    padding: "5px 10px",
  },
  headerButton: {
    width: "150px",
    height: "50px",
    backgroundColor: "#000000",
    color: "#ffffff",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "bolder",
    border: "none",
    boxShadow: "none",
    textAlign: "center",
  },
};
