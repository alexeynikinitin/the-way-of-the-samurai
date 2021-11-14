import React from "react";
import {
  newPost,
  updateTextAreaPost,
} from "../../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStoreToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    changeTextAreaPost: state.profilePage.changeTextAreaPost
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//     addText: () => dispatch(newPostActionCreator()),
//     updateTextArea: (message) => dispatch(updateTextAreaPostActionCreator(message))
//   }
// }

let MyPostsContainer = connect(mapStoreToProps, {newPost, updateTextAreaPost})(MyPosts);

export default MyPostsContainer;