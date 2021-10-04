import React from "react";
import classes from "./Post.module.scss"

let Post = (props) => {
    return(
        <div className={classes.post}>
            <div className={classes.text}>
              <img src="https://vraki.net/sites/default/files/inline/images/30_55.jpg" alt="ava_post"/>
              <p>
                {props.message}
              </p>
            </div>
            <div className={classes.btn}>
                <button>
                  {props.like}
                </button>
            </div>
        </div>
    );
};

export default Post