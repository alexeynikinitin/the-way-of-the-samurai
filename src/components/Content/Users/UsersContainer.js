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
    followw: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId))
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default UsersContainer;