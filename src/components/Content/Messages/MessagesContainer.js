import React from "react";
import {addMessageActionCreator, updateTextAreaMessageActionCreator} from "../../../redux/messagePageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.messagesPage.users,
    userMessages: state.messagesPage.userMessages,
    changeTextAreaMessage: state.messagesPage.changeTextAreaMessage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    updateTextArea: (message) => dispatch(updateTextAreaMessageActionCreator(message))
  }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer
