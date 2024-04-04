import CustomHeader from "../components/CustomHeader";
import ProductsView from "../components/ProductsView";

function SecondaryPage() {
  return (
    <>
      <div style={styles.appContainer}>
        <CustomHeader currentView={"secondary"} />
        <div style={styles.contentWrapper}>
          <ProductsView />
        </div>
      </div>
    </>
  );
}

export default SecondaryPage;

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
