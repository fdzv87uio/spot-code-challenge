import CustomHeader from "../components/CustomHeader";
import HomeView from "../components/HomeView";
import CustomFooter from "../components/CustomFooter";

function App() {
  return (
    <>
      <div style={styles.appContainer}>
        <CustomHeader currentView={"home"} />
        <div style={styles.contentWrapper}>
          <HomeView />
        </div>
        <CustomFooter />
      </div>
    </>
  );
}

const styles = {
  appContainer: {
    width: "100%",
    height: "auto",
    position: "relative",
    overflowX: "hidden",
  },
  contentWrapper: {
    position: "relative",
    top: "70px",
  },
};

export default App;
