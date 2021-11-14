const NEW_POST = "NEW-POST";
const UPDATE_TEXT_AREA_POST = "UPDATE-TEXT-AREA-POST";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";
const SET_PROFILE_INFO_BY_ID = "SET_PROFILE_INFO_BY_ID";

let initialize = {
  posts: [
    {id: 0, message: "Hello", like: "10"},
    {id: 1, message: "Hello", like: "20"},
    {id: 2, message: "Hello", like: "30"},
  ],
  changeTextAreaPost: '',
  profileInfo: null,
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
    case SET_PROFILE_INFO: {
      return {
        ...profilePageState,
        profileInfo: action.response
      }
    }
    default:
      return profilePageState;
  }
}

export const newPost = () => ({type: NEW_POST});
export const updateTextAreaPost = (message) => ({type: UPDATE_TEXT_AREA_POST, message: message});
export const setProfileInfo = (response) => ({type: SET_PROFILE_INFO, response: response});

export default profilePageReducer;