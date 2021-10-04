import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


let Profile = (props) => {
  return (
    <div className="classes.profile">
       {/*<ProfileInfo />   */}
      <MyPostsContainer />
    </div>
  );

};

export default Profile