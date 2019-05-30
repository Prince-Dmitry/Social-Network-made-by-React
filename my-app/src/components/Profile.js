import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return (
        <div className={classes.content}>
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
            <div className={classes.posts}>
              <div className={classes.item}>
                post 1
              </div>
              <div className={classes.item}>
                post 2
              </div>
            </div>
          </div>
        </div>
        )
}

export default Profile;
