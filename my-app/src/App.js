import React from 'react';
import './App.css';
import Header from './components/Header';
import NawBar from './components/NawBar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="grid">
        <Header />
        <NawBar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
