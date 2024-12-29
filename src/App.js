import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
