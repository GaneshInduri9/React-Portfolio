import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <React.StrictMode>
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
