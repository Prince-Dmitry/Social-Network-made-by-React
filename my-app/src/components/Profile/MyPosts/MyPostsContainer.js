import React from 'react';

import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch( addPostActionCreator() );
  }

  let onPostChange = () => {
    //let text = newPostElement.current.value;
    //props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', newText: {text}} );
    let action = updateNewPostTextCreator(text);
    props.store.dispatch(action);
  }
  return (<MyPosts updateNewPostText={onPostChange} 
                   addPost={addPost} 
                   posts={state.posts} 
                   newPostText={state.newPostText} />)
}
/*
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
*/
export default MyPostsContainer;
