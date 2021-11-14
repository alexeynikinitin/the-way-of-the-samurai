import classes from "./FindUsers.module.scss";
import React from "react";
import {NavLink} from "react-router-dom";
import {setProfileInfoById} from "../../../redux/profilePageReducer";

let FindUsers = (props) => {
  let totalPagesMass = [];
  let totalPages = Math.ceil(props.totalCount / props.countUsersPage)
  for (let i = 1; i <= totalPages; i++)
    totalPagesMass.push(i);
  return (
    <div>
      {totalPagesMass.map(p => {
        return <span className={props.currentPage === p ? classes.activePage : classes.page} onClick={() => {
          props.onPageClick(p) }}> {p} </span>
      })}

      {props.users.map(u =>
        <div key={u.id} className={classes.user}>
          <div className={classes.photo_btn}>
            <div className={classes.photoBox}>
              <NavLink to={"/profile/" + u.id}>
                <img className={classes.photo} src={u.photos.small} alt="photo"/>
              </NavLink>
            </div>
            {
              u.followed
                ? <button className={classes.btn} onClick={() => {
                  props.follow(u.id)
                }}>follow</button>
                : <button className={classes.btn} onClick={() => {
                  props.unfollow(u.id)
                }}>unfollow</button>
            }
          </div>
          <div className={classes.name_message}>
            <p className={classes.name}>{u.name}</p>
            <p className={classes.message}>u.message</p>
          </div>
          <div className={classes.country_city}>
            <p className={classes.country}>u.location.country</p>
            <p className={classes.city}>u.location.city</p>
          </div>
        </div>)}
    </div>
  )
}

export default FindUsers;