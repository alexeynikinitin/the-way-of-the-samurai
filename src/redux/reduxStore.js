import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers( {
  profilePage: profilePageReducer,
  messagesPage: messagePageReducer,
  usersPage: usersPageReducer
});

let store = createStore(reducers);


export default store;

