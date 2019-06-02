import React from 'react';
import classes from './NawBar.module.css';
import {NavLink} from 'react-router-dom';

const NawBar = (props) => {
  return (
        <nav className={classes.sidebar}>
          <div className={classes.item + ' ' + classes.itemActive}>
          	<NavLink to='/profile'>Profile</NavLink>
          </div>
          <div className={classes.item + ' ' + classes.itemActive}>
          	<NavLink to='/dialogs'>Messages</NavLink>
          </div>
          <div className={classes.item}>
          	<NavLink>News</NavLink>
          </div>
          <div className={classes.item}>
          	<NavLink>Music</NavLink>
          </div>
          <div className={classes.item}>
          	<NavLink>Settings</NavLink>
          </div>
        </nav>
    )
}

export default NawBar;
