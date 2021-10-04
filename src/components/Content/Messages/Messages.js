import classes from "./Messages.module.scss";
import User from "./User/User";
import UserMessages from "./UserMessages/UserMessages";
import React from "react";


let Messages = (props) => {

  let usersMass = props.users.map(n => <User id = { n.id } name = { n.name } ava = { n.ava } />)
  let userMessagesMass = props.userMessages.map(m => <UserMessages messages = { m.message } />)

  let addMessage = () => {
    props.addMessage();
  };
  let updateTextAreaMessage = (e) => {
    let message = e.target.value;
    props.updateTextArea(message);
  }

  return (
    <div className = { classes.messages }>

      <div className = { classes.users }>
        { usersMass }
      </div>

      <div className = { classes.users_messages }>
        { userMessagesMass }
        <div className = { classes.new_message }>
          <p className = { classes.lable }>
            Написать сообщение
          </p>
          <textarea
            className = { classes.textarea }
            onChange = { updateTextAreaMessage }
            value = { props.changeTextAreaPost }
          />
          <button className = { classes.btn }
                  onClick = { addMessage }>
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Messages;
