import {profileAPI, UsersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
        posts: [
            {
                id: 'p1',
                likesCount: 12,
                text: "Oh, I was not made for heaven. No, I don't want to go to heaven. Hell is much better. Think of all the interesting people you're going to meet down there!"
            },
            {
                id: 'p2',
                likesCount: 3,
                text: "The reason we're successful, darling? My overall charisma, of course."
            },
            {
                id: 'p3',
                likesCount: 72,
                text: "I am a romantic, but I do put up a barrier around myself, so it is hard for people to get in and to know the real me."
            }
        ],
        newPostText: '',
        profile: null,
        status: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = state.newPostText;
            return {
                ...state,
                posts: [{id: '', likesCount: 0, text: newPost}, ...state.posts],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE : {
            return { ...state, profile: action.profile}
        }
        case SET_STATUS: {
            return { ...state, status: action.status}
        }

        default:
            return state;
    }
};

export const addPost = () => ({type: ADD_POST});
export const updateNewPost = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const profileUser = (userId) => {
    return (dispatch) => {
        UsersApi.profile(userId)
            .then(data => {
                dispatch (setUserProfile(data));
            })
    }
}

export const profileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer;