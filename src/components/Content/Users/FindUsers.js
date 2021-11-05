import classes from "./FindUsers.module.scss";
import React from "react";
import axios from "axios";

class FindUsers extends React.Component {
  constructor(props) {
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      props.setUsers(response.data.items);
    })
  }

  render = () => {
    return (
      <div>
        {this.props.users.map(u =>
          <div key={u.id} className={classes.user}>
            <div className={classes.photo_btn}>
              <div className={classes.photoBox}>
                <img className={classes.photo} src={u.message} alt="photo"/>
              </div>
              {
                u.followed
                  ? <button className={classes.btn} onClick={() => {
                    this.props.followw(u.id)
                  }}>follow</button>
                  : <button className={classes.btn} onClick={() => {
                    this.props.unfollow(u.id)
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
}

export default FindUsers;