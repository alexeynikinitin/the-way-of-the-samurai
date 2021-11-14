const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_COUNT_USERS_PAGE = "SET_COUNT_USERS_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialize = {
  users: [],
  currentPage: 1,
  countUsersPage: 100,
  totalCount: 0,
  isFetching: false
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
    case SET_CURRENT_PAGE: {
      return {
        ...usersPageState,
        currentPage: action.currentPage
      }
    }
    case SET_TOTAL_COUNT: {
      return {
        ...usersPageState,
        totalCount: action.totalCount
      }
    }case TOGGLE_IS_FETCHING: {
      return {
        ...usersPageState,
        isFetching: action.isFetching
      }
    }

    default:
      return usersPageState;
  }
}

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (response) => ({type: SET_USERS, response: response});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setCountUsersPage = (countUsersPage) => ({type: SET_COUNT_USERS_PAGE, countUsersPage: countUsersPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

export default usersPageReducer;