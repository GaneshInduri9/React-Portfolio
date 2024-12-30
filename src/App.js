import React, { useEffect, useState } from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import PreLoader from './components/PreLoader';
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
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
