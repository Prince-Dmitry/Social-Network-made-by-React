import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

/*
  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'Die, die, die my darlling', likesCount: 1},
    {id: 3, message: 'I wanna see you in hell'},
    {id: 4, message: 'Just shot up your pretty mount'},
    {id: 5, message: 'Kill your mother, fuck your dog'}
  ]
*/

  return (
        <div className={classes.content}>
          <ProfileInfo />
          <MyPostsContainer store={props.store}/>
        </div>
        )
}

export default Profile;
