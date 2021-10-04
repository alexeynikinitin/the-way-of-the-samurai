import React from "react";
import {connect} from "react-redux";
import {followAC, unfollowAC} from "../../../redux/usersPageReducer";
import FindUsers from "./FindUsers";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(unfollowAC(userId)),
    unfollow: (userId) => dispatch(followAC(userId))
  }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;