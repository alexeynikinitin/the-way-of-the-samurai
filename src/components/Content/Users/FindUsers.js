import classes from "./FindUsers.module.scss";
import React from "react";

let FindUsers = (props) => {

  return (
    <div>
      {props.users.map(u =>
        <div key={u.id} className={classes.user}>
          <div className={classes.photo_btn}>
            <div className={classes.photoBox}>
              <img className={classes.photo} src={u.photo} alt="photo"/>
            </div>
            {
              u.followed
                ? <button className={classes.btn} onClick={() => {props.followw(u.id)}}>follow</button>
                : <button className={classes.btn} onClick={() => {props.unfollow(u.id)}}>unfollow</button>
            }
          </div>
          <div className={classes.name_message}>
            <p className={classes.name}>{u.name}</p>
            <p className={classes.message}>{u.message}</p>
          </div>
          <div className={classes.country_city}>
            <p className={classes.country}>{u.location.country}</p>
            <p className={classes.city}>{u.location.city}</p>
          </div>
        </div>)}
    </div>
  )
}

export default FindUsers;