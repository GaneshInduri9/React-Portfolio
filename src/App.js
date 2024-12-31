import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import PreLoader from './components/PreLoader';
import ScrollToTop from "./components/ScrollToTop";
import "./styles.css";
import "./App.css";
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [load, updateLoad] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      updateLoad(false)
    },1200);
    return ()=>{
      clearTimeout(timer)
    }
  },[]);
  return (
    <Router>
        <PreLoader load={load}/>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
