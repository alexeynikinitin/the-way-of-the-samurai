import React from "react";
import {connect} from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setIsFetching
} from "../../../redux/usersPageReducer";
import FindUsers from "./FindUsers";
import axios from "axios";
import Preloader from "../Preloader/Preloader";


class UsersContainerAPI extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsersPage}`).then(response => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalCount(response.data.totalCount);
    })
  }

  onPageClick = (page) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.countUsersPage}`).then(response => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.items);
    })
  }

  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <FindUsers totalCount={this.props.totalCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   countUsersPage={this.props.countUsersPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageClick={this.onPageClick}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    countUsersPage: state.usersPage.countUsersPage,
    totalCount: state.usersPage.totalCount,
    isFetching: state.usersPage.isFetching
  }
}

let UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setIsFetching,
})(UsersContainerAPI);

export default UsersContainer;