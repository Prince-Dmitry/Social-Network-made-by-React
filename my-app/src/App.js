import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NawBar from './components/NawBar/NawBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="grid">
          <Header />
          <NawBar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profile} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
