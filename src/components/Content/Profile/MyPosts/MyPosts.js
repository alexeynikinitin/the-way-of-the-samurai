import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.scss"
import {newPost, updateTextAreaPost} from "../../../../redux/profilePageReducer";

let MyPosts = (props) => {

  let addTextPost = () => {
    props.newPost();
  }

  let updateTextAreaPost = (e) => {
    let message = e.target.value;
    props.updateTextAreaPost(message);
  }

  return (
    <div className={ classes.myPosts }>

      <div className={ classes.listPosts }>
        { props.posts.map(p => <Post message = { p.message } like={ p.like } />)}
      </div>

      <div className = { classes.newPost }>
        <p className = { classes.lable }>
          Написать пост
        </p>
        <textarea
          className = { classes.textarea }
          onChange  = { updateTextAreaPost }
          value     = { props.changeTextAreaPost }
        />
        <button
          className = { classes.btn }
          onClick={ addTextPost }>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default MyPosts;