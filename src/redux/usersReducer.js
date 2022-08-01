import {UsersApi} from "../api/api";

const FOLLOWING = 'FOLLOWING';
const REMOVE = 'REMOVE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IN_PROGRESS = 'TOGGLE_IN_PROGRESS';

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
        case FOLLOWING:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false};
                    }
                  return u
                })
            }
        case REMOVE:
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

export const following = (userId) => ({type: FOLLOWING, userId});
export const remove = (userId) => ({type: REMOVE, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleInProgress = (isFollowing, userId) => ({type: TOGGLE_IN_PROGRESS, isFollowing, userId});

export const requestUsers = (pageSize, page) => {
   return (dispatch) => {
        dispatch (toggleIsFetching(true));
        UsersApi.getUsers(pageSize, page)
            .then(data => {
                dispatch (setCurrentPage(page));
                dispatch (toggleIsFetching(false));
                dispatch (setUsers(data.items));
                // dispatch (setTotalUsersCount(data.totalCount));
            })
    }
}

export const deleteUser = (userId) => {
    return (dispatch) => {
        dispatch (toggleInProgress(true, userId));
        UsersApi.removeUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch (following(userId))
                }
                dispatch (toggleInProgress(false, userId));
            });
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch (toggleInProgress(true, userId));
        UsersApi.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch (remove(userId))
                }
                dispatch (toggleInProgress(false, userId));
            });
    }
}


























export default usersReducer;