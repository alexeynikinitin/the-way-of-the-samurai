const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_TEXT_AREA_MESSAGE = "UPDATE-TEXT-AREA-MESSAGE";

let initialize = {
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
}

const messagePageReducer = (messagePageState = initialize, action) => {
  switch (action.type) {
    case NEW_MESSAGE: {
      let newMessageElement = {
        id: 3,
        message: messagePageState.changeTextAreaMessage
      };
      return {
        ...messagePageState,
        userMessages: [...messagePageState.userMessages, newMessageElement],
        changeTextAreaMessage: ''
      };
    }
    case UPDATE_TEXT_AREA_MESSAGE: {
      return {
        ...messagePageState,
        changeTextAreaMessage: action.message
      };
    }
    default:
      return messagePageState;
  }
}

export const addMessageActionCreator = () => ({ type: NEW_MESSAGE });
export const updateTextAreaMessageActionCreator = (message) => ({ type: UPDATE_TEXT_AREA_MESSAGE, message: message });

export default messagePageReducer;