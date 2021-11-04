const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialize = {
  users: []
};

const usersPageReducer = (usersPageState = initialize, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...usersPageState,
        users: usersPageState.users.map(u => {
          // Если id совпадает, то
          if (u.id === action.userId) {
            // копируем юзера и изменяем его followed
            return {...u, followed: false};
          } else
            // иначе возвращаем некопированный и не измененный юзер
            return u;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...usersPageState,
        users: usersPageState.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true};
          } else
            return u;
        })
      }
    }
    case SET_USERS: {
      return {
        ...usersPageState,
        users: action.response
      }
    }
    default:
      return usersPageState;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (response) => ({type: SET_USERS, response: response});

export default usersPageReducer;