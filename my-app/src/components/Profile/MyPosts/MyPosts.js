import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/state";


/*
let addPostActionCreator = () => {
    return {
      type: 'ADD-POST'
    }
}

let updateNewPostTextCreator = (text) => {
    return {
      type: 'UPDATE-NEW-POST-TEXT', newText: text}
}
*/


const MyPosts = (props) => {
/*
  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'Die, die, die my darlling', likesCount: 1},
    {id: 3, message: 'I wanna see you in hell'},
    {id: 4, message: 'Just shot up your pretty mount'},
    {id: 5, message: 'Kill your mother, fuck your dog'}
  ]
*/

  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
    // props.addPost(text);
    // newPostElement.current.value = " ";
    props.dispatch( addPostActionCreator() );
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', newText: {text}} );
    let action = updateNewPostTextCreator(text);
    props.dispatch(action);
  }

  return (<div className="classes.postBlock">
            My posts
            <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={ props.newPostText }/>
              <button onClick={ addPost }>Add post</button>
            </div>
            <div className={classes.posts}>
              { postElements }
            </div>
    </div>)
}

export default MyPosts;
