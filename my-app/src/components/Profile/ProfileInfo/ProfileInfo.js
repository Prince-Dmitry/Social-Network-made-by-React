import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
        <div className={classes.content}>
          <div>
            <img src ='https://dl1.extraimage.info/fXvQ.jpg' width='100%' height='200'/>
          </div>
          <div>
            ava + description
          </div>
        </div>
        )
}

export default ProfileInfo;
