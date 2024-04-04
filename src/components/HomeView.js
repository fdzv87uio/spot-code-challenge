import { Link } from "react-router-dom";

export default function HomeView() {
  return (
    <>
      <div style={styles.homeHero}>
        <div style={styles.heroTexts}>
          <h2 style={styles.heroTitle}>SPOT React.js Code Challenge</h2>
          <p style={styles.heroCopy}>
            The following is a "Proof of Concept" implementation of a react.js
            web application developed by <strong>Fausto Zambrano, MSC;</strong>{" "}
            as part of the selection process at SPOT.
          </p>
          <div style={styles.heroControlWrapper}>
            <Link to="/secondary-page">
              <button style={styles.heroButtonBlack}>Product List</button>
            </Link>
            <a href="mailto:d.zambrano.vasconez@gmail.com">
              <button style={styles.heroButtonWhite}>Contact the author</button>
            </a>
          </div>
        </div>
        <div style={styles.heroSquares}>
          <div style={styles.squareOne}></div>
          <div style={styles.squareTwo}></div>
        </div>
      </div>
      <div style={styles.banner}>
        <div style={styles.textBox1}>
          <p style={styles.tbTitle}>The Stack</p>
          <p style={styles.tbCopy}>
            This project uses React.js, React-Router-Dom.js and Webpack. Please,
            refer to README file to learn about the installation process.
          </p>
        </div>
        <div style={styles.bigSquare}></div>
        <div style={styles.textBox2}>
          <p style={styles.tbTitle}>API</p>
          <p style={styles.tbCopy}>
            We are using the JSONPlaceholder Service (Fake Online REST API for
            Testing and Prototyping)
          </p>
        </div>
      </div>
    </>
  );
}

const styles = {
  homeHero: {
    width: "100%",
    paddingLeft: "30px",
    paddingRight: "30px",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  heroTexts: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  heroTitle: {
    fontSize: "4.5rem",
    fontWeight: "bolder",
    fontFamily: "sans-serif",
    maxWidth: "500px",
  },
  heroCopy: {
    fontSize: "1rem",
    color: "#999999",
    fontWeight: "normal",
    fontFamily: "sans-serif",
  },
  heroControlWrapper: {
    width: "350px",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  heroButtonBlack: {
    width: "100%",
    height: "40px",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
  },
  heroButtonWhite: {
    width: "100%",
    height: "40px",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    border: "1px solid #000000",
    color: "#000000",
  },
  heroSquares: {
    width: "100%",
    height: "100vh",
    position: "relative",
  },
  squareOne: {
    width: "375px",
    height: "375px",
    position: "absolute",
    left: "120px",
    top: "100px",
    backgroundColor: "#ececec",
  },
  squareTwo: {
    width: "200px",
    height: "200px",
    position: "absolute",
    top: "40px",
    right: "75px",
    backgroundColor: "#999999",
  },
  banner: {
    width: "95%",
    height: "600px",
    display: "flex",
    flexDirection: "row",
    position: "relative",
    padding: "20px 30px",
    gap: "40px",
  },
  textBox1: {
    width: "30%",
    marginTop: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  textBox2: {
    width: "30%",
    marginTop: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  bigSquare: {
    width: "30%",
    height: "450px",
    backgroundColor: "#ececec",
  },
  tbTitle: {
    maxWidth: "300px",
    color: "#000000",
    fontSize: "1rem",
    fontWeight: "bolder",
    fontFamily: "sans-serif",
  },
  tbCopy: {
    maxWidth: "300px",
    color: "#999999",
    fontSize: "1rem",
    fontWeight: "normal",
    fontFamily: "sans-serif",
  },
};
