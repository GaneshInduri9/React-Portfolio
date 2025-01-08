import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PreLoader from './components/PreLoader';
import ScrollToTop from "./components/ScrollToTop";
import "./styles.css";
import "./App.css";
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Project from './components/Projects/Project';
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
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
