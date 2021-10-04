import React from "react";
import classes from "./User.module.scss"
import {NavLink} from "react-router-dom";

let User = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <NavLink className={classes.user_item} to={"/users/" + props.id} activeClassName={classes.active}>
          <img src={props.ava} alt={"ava_user" + props.id} />
          <p>
            {props.name}
          </p>
        </NavLink>
      </div>

    </div>
  );
};

export default User