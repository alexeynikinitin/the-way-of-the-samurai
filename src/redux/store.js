import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";

let store = {
  _renderNewState() {
    console.log('Hey');
  },
  subscribe(observer) {
    this._renderNewState = observer;
  },
  _state: {
    profilePage: {
      posts: [
        {id: 0, message: "Hello", like: "10"},
        {id: 1, message: "Hello", like: "20"},
        {id: 2, message: "Hello", like: "30"},
      ],
      changeTextAreaPost: ''
    },
    messagesPage: {
      users: [
        {id: "0", name: "Alex", ava: "https://vraki.net/sites/default/files/inline/images/30_55.jpg"},
        {id: "1", name: "Sasha", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"},
        {id: "2", name: "Sveta", ava: "https://vraki.net/sites/default/files/inline/images/1_6.png"},
        {id: "3", name: "Yana", ava: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
        {id: "4", name: "Valera", ava: "https://vraki.net/sites/default/files/mood/m.jpg"}
      ],
      userMessages: [
        {id: "0", message: "Hi"},
        {id: "1", message: "How are you"},
        {id: "2", message: "What is your name"}
      ],
      changeTextAreaMessage: ""
    },
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.messagesPage = messagePageReducer(this._state.messagesPage, action);
    this._renderNewState(this._state);
  }
}

export default store;



