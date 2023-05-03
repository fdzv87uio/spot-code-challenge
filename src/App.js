import logo from './logo.svg';
import './App.css';
import CustomHeader from './components/CustomHeader';
import { useState } from 'react';
import ProductsView from './components/ProductsView';
import HomeView from './components/HomeView';
import CustomFooter from './components/CustomFooter';

function App() {
  const [currentView, setCurrentView] = useState("home");
  return (
    <>
    <div style={styles.appContainer}>
      <CustomHeader currentView={currentView} setCurrentView={setCurrentView}  />
      <div style={styles.contentWrapper}>
      {currentView === "home" && (
          <HomeView />
        )}
        {currentView === "products" && (
          <ProductsView currentView={currentView} setCurrentView={setCurrentView}  />
        )}
      </div>
      <CustomFooter />
    </div>
    </>
  );
}

const styles = {
  appContainer:{
    width:"100%",
    height:"auto",
    position:"relative",
    overflowX:"hidden",
  },
  contentWrapper:{
    position:"relative",
    top:"70px",
  }
}

export default App;
