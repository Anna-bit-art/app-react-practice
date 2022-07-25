import {authAPI} from "../api/api";
// import noAvatar from "../../../img/no-avatar.png";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR = 'SET_ERROR';
// const SET_PHOTO = 'SET_PHOTO';


let initialState = {
    id: null,
    photo: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    errorMessage: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_ERROR:

            return { ...state, errorMessage: action.errorMessage }

        // case SET_PHOTO:
        //     return {
        //         ...state,
        //         photo: action.photo
        //     }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type:SET_USER_DATA, payload:{id, email, login, isAuth}});
export const setError = (errorMessage) => ({type: SET_ERROR, errorMessage})
// export const setAuthPhoto = (photo) => ({type: SET_PHOTO, photo});

export const authMe = () => (dispatch) => {
    return authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true))
            }
        })
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(authMe())
                }
                if(data.resultCode !== 0){
                    dispatch(setError(data.messages[0]))
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}



// export const myPhoto = (photo) => {
//     return (dispatch) => {
//         authAPI.myPhoto()
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(setAuthPhoto(photo))
//                 }
//             })
//     }
// }


export default authReducer;

