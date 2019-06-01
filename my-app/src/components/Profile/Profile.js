import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
        <div className={classes.content}>
          <div>
            <img src ='https://dl1.extraimage.info/fXvQ.jpg' width='100%' height='200'/>
          </div>
          <div>
            ava + description
          </div>
          <MyPosts />
        </div>
        )
}

export default Profile;
