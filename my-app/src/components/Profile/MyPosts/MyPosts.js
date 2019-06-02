import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'Die, die, die my darlling', likesCount: 1},
    {id: 3, message: 'I wanna see you in hell'},
    {id: 4, message: 'Just shot up your pretty mount'},
    {id: 5, message: 'Kill your mother, fuck your dog'}
  ]

  let postElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (<div className="classes.postBlock">
            My posts
            <div>
              <textarea></textarea>
              <button>Add post</button>
            </div>
            <div className={classes.posts}>
              { postElements }
            </div>
    </div>)
}

export default MyPosts;