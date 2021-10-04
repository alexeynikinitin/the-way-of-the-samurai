import React from "react";
import classes from "./UserMessages.module.scss"

let UserMessages = (props) => {
  return(
    <div className={classes.user_messages}>
      <p className={classes.messages}>
        { props.messages }
      </p>
    </div>
  );
};

export default UserMessages