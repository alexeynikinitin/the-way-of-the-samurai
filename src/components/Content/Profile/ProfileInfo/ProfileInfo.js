import React from "react";
import classes from './ProfileInfo.module.scss'
import Preloader from "../../Preloader/Preloader";


const ProfileInfo = (props) => {
  if (!props.profileInfo) {
    return (
      <div>
        <Preloader />
      </div>
    )
  }
  return (
    <div className={classes.profile}>
      <img src={props.profileInfo.photos.large} alt={props}/>
      <h3>Name</h3>
      <div>
        contacts
      </div>
    </div>
  )
}

export default ProfileInfo