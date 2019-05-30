import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="grid">
        <header className='header'>
          <img src='https://i.ebayimg.com/00/s/NTM1WDExNDU=/z/RLkAAOSwidlZY9JU/$_1.JPG' width='80' height='40'/>
        </header>
        <nav className='sidebar'>
          <div><a>Profile</a></div>
          <div><a>Messages</a></div>
          <div><a>News</a></div>
          <div><a>Music</a></div>
          <div><a>Settings</a></div>
        </nav>
        <div className='content'>
          <div>
            <img src ='https://dl1.extraimage.info/fXvQ.jpg' width='100%' height='200'/>
          </div>
          <div>
            ava + description
          </div>
          <div>
            My posts
            <div>
              New posts
            </div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
