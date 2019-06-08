import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    // let text = newPostElement.current.value;
    props.addPost();
    // newPostElement.current.value = " ";
    //props.dispatch( addPostActionCreator() );
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', newText: {text}} );
    props.updateNewPostText(text);
    //props.dispatch(action);
  }

  return (<div className="classes.postBlock">
            My posts
            <div>
              <textarea onChange={onPostChange} 
                        ref={newPostElement} 
                        value={ props.newPostText }/>
              <button onClick={ onAddPost }>Add post</button>
            </div>
            <div className={classes.posts}>
              { postElements }
            </div>
    </div>)
}

export default MyPosts;
