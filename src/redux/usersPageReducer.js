const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialize = {
  users: [
    {
    id: 0,
    followed: 'follow',
    photo: 'https://avatars.mds.yandex.net/get-pdb/1004345/f795977b-4fde-4176-a87f-4f0acba543e8/s1200?webp=false',
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
      photo: 'https://avatars.mds.yandex.net/get-pdb/1004345/f795977b-4fde-4176-a87f-4f0acba543e8/s1200?webp=false',
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
      photo: 'https://avatars.mds.yandex.net/get-pdb/1004345/f795977b-4fde-4176-a87f-4f0acba543e8/s1200?webp=false',
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