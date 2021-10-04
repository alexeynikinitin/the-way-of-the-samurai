const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialize = {
  users: [
    {
    id: 0,
    followed: 'follow',
    photo: 'https://get.pxhere.com/photo/man-person-girl-woman-camera-photography-dslr-portrait-spring-red-lens-color-autumn-canon-romance-season-taking-photo-photograph-beauty-emotion-photo-shoot-portrait-photography-939435.jpg',
    name: 'Dmitry',
    message: 'Hello, i`m Dmitry',
    location: {
      country: 'Belarus',
      city: 'Minsk'
    }
  },
    {
      id: 1,
      followed: 'unfollow',
      photo: 'https://get.pxhere.com/photo/man-person-girl-woman-camera-photography-dslr-portrait-spring-red-lens-color-autumn-canon-romance-season-taking-photo-photograph-beauty-emotion-photo-shoot-portrait-photography-939435.jpg',
      name: 'Sasha',
      message: 'Hello, i`m Sasha',
      location: {
        country: 'Russia',
        city: 'Moscow'
      }
    },
    {
      id: 2,
      followed: 'follow',
      photo: 'https://get.pxhere.com/photo/man-person-girl-woman-camera-photography-dslr-portrait-spring-red-lens-color-autumn-canon-romance-season-taking-photo-photograph-beauty-emotion-photo-shoot-portrait-photography-939435.jpg',
      name: 'Andrew',
      message: 'Hello, i`m Andrew',
      location: {
        country: 'Ukraine',
        city: 'Kiev'
      }
    },
  ]
}

const usersPageReducer = (usersPageState = initialize, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...usersPageState,
        users: [usersPageState.users.map(u => {
          if (u.id === action.userId) {
            u.followed = 'unfollow';
            return usersPageState;
          }
        })]
      }
    }
    case UNFOLLOW: {
      return {
        ...usersPageState,
        users: [usersPageState.users.map(u => {
          if (u.id === action.userId) {
            u.followed = 'follow';
            return usersPageState;
          }
        })]
      }
    }
    default:
      return usersPageState;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});

export default usersPageReducer;