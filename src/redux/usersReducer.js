import {UsersApi} from "../api/api";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IN_PROGRESS = 'users/TOGGLE_IN_PROGRESS';

let initialState = {
        users: [
            // { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5J4z_a4KoMnaFB478xmoxOc_ghPx4Vs6kh6rz-rDYwl9M-qo0vaGvpZfpiTJb-bt13w&usqp=CAU',
            //     followed: true, fullName: 'David Bowie', status: 'Life looks like a play field', location: { city: 'London', country: 'US'} },
            // { id: 2, photoUrl: 'https://los40es00.epimg.net/los40/imagenes/2021/07/05/los40classic/1625487493_767308_1625487832_noticia_normal_amp.jpg',
            //     followed: false, fullName: 'Queen', status: 'We are the champions', location: { city: 'London', country: 'US'} },
            // { id: 3, photoUrl: 'https://jenesaispop.com/wp-content/uploads/2022/01/kanyewest-696x316.jpg',
            //     followed: false, fullName: 'Kanye West', status: 'ye ', location: { city: 'Chicago', country: 'USA'} },
            // { id: 4, photoUrl: 'https://cdnimg.rg.ru/img/content/131/01/78/850_4_d_850.jpg',
            //     followed: true, fullName: 'Jared Leto', status: 'Bartholomew Cubbins', location: { city: 'Louisiana', country: 'USA'} },
        ],
        pageSize: 7,
        totalUsersCount: 300,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false};
                    }
                  return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u
                })
            }
        case SET_USERS: {
            // return { ...state, users: [ ...state.users, ...action.users] }
            return { ...state, users: [ ...action.users] }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleInProgress = (isFollowing, userId) => ({type: TOGGLE_IN_PROGRESS, isFollowing, userId});


export const requestUsers = (pageSize, page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await UsersApi.getUsers(pageSize, page)
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    // dispatch (setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleInProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch (actionCreator(userId))
    }
    dispatch(toggleInProgress(false, userId));
}

export const deleteUser = (userId) => (dispatch) => {
   return followUnfollowFlow(dispatch, userId, UsersApi.removeUser.bind(UsersApi), follow)
}

export const followUser = (userId) => (dispatch) => {
    return followUnfollowFlow(dispatch, userId, UsersApi.followUser.bind(UsersApi), unfollow)
}












// export const deleteUser = (userId) => (dispatch) => {
//     dispatch(toggleInProgress(true, userId));
//     let response = await UsersApi.removeUser(userId)
//     if (response.resultCode === 0) {
//         dispatch(follow(userId))
//     }
//     dispatch(toggleInProgress(false, userId));
// }

// export const followUser = (userId) => (dispatch) => {
//     dispatch(toggleInProgress(true, userId));
//     let response = await UsersApi.followUser(userId)
//     if (response.resultCode === 0) {
//         dispatch(unfollow(userId))
//     }
//     dispatch(toggleInProgress(false, userId));
// }













export default usersReducer;
