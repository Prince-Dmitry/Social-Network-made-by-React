import React from 'react';
import classes from './NawBar.module.css';

const NawBar = () => {
  return (
        <nav className={classes.sidebar}>
          <div className={classes.item}><a href='/profile'>Profile</a></div>
          <div className={classes.item}><a href='/dialogs'>Messages</a></div>
          <div className={classes.item}><a>News</a></div>
          <div className={classes.item}><a>Music</a></div>
          <div className={classes.item}><a>Settings</a></div>
        </nav>
        )
}

export default NawBar;
