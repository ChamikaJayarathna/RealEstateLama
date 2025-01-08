import React from 'react';
import './layout.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar/>
      </div>
      <div className="content">
        <HomePage/>
      </div>
    </div>
  )
}

export default App;