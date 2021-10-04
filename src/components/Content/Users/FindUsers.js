import classes from "./FindUsers.module.scss";

let FindUsers = (props) => {
  return (
    <div className={ classes.users }>
      <div>
        {
          props.users.map(u => {
            <div>

            </div>
          })
        }
      </div>
    </div>
  )
}

export default FindUsers;