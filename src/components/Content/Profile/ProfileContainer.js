import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setProfileInfo} from "../../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileContainerAPI extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId)
      userId = 2
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      this.props.setProfileInfo(response.data);
    })
  }

  render = () => {
    return (
      <div>
        <Profile {...this.props}
                 profileInfo={this.props.profileInfo}
        />
      </div>
    )
  }
}

let mapStoreToProps = (state) => {
  return {
    profileInfo: state.profilePage.profileInfo
  }
}
let withRouterProfileContainer = withRouter(ProfileContainerAPI)

let ProfileContainer = connect(mapStoreToProps, {setProfileInfo})(withRouterProfileContainer);

export default ProfileContainer;
