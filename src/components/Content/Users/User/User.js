import React from "react";
import classes from "./User.module.scss"

let User = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.photo_btn}>
        <div className={classes.photoBox}>
          <img className={classes.photo} src={props.photo} alt="photo"/>
        </div>
        <button className={classes.btn}>{props.followed}</button>
      </div>
      <div className={classes.name_message}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.message}>{props.message}</p>
      </div>
      <div className={classes.country_city}>
        <p className={classes.country}>{props.country}</p>
        <p className={classes.city}>{props.city}</p>
      </div>
    </div>
  );
};

export default User