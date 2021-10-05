import classes from "./FindUsers.module.scss";
import User from "./User/User";

let FindUsers = (props) => {
  let usersMass = props.users.map(u => <User
    photo =     {u.photo}
    followed =  {u.followed}
    name =      {u.name}
    message =   {u.message}
    country =   {u.location.country}
    city =      {u.location.city}
    />)
  return (
    <div className={classes.users}>
      <div>
        {usersMass}
      </div>
    </div>
  )
}

export default FindUsers;