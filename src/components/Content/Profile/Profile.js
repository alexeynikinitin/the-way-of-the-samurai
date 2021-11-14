import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


let Profile = (props) => {
  return (
    <div className="classes.profile">
      <ProfileInfo profileInfo = {props.profileInfo}/>
      <MyPostsContainer />
    </div>
  );

};

export default Profile;