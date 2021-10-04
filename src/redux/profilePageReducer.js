const NEW_POST = "NEW-POST";
const UPDATE_TEXT_AREA_POST = "UPDATE-TEXT-AREA-POST";

let initialize = {
  posts: [
    {id: 0, message: "Hello", like: "10"},
    {id: 1, message: "Hello", like: "20"},
    {id: 2, message: "Hello", like: "30"},
  ],
  changeTextAreaPost: ''
}

const profilePageReducer = (profilePageState = initialize, action) => {
  switch (action.type) {
    case NEW_POST: {
      let newPostElement = {
        id: 3,
        message: profilePageState.changeTextAreaPost,
        like: 0
      };
      return {
        ...profilePageState,
        posts: [...profilePageState.posts, newPostElement],
        changeTextAreaPost: ''
      };
    }
    case UPDATE_TEXT_AREA_POST: {
      return {
        ...profilePageState,
        changeTextAreaPost: action.message
      };
    }
    default:
      return profilePageState;
  }
}

export const newPostActionCreator = () => ({type: NEW_POST});
export const updateTextAreaPostActionCreator = (message) => ({type: UPDATE_TEXT_AREA_POST, message: message});

export default profilePageReducer;