import {authAPI} from "../api/api";
// import noAvatar from "../../../img/no-avatar.png";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN = 'SET_LOGIN';
// const SET_PHOTO = 'SET_PHOTO';


let initialState = {
    id: null,
    photo: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    password: null,
    rememberMe: false,
    captcha: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_LOGIN:
            return {
                ...state,
                ...action.data
            }
        // case SET_PHOTO:
        //     return {
        //         ...state,
        //         photo: action.photo
        //     }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login) => ({type:SET_USER_DATA, data:{id, email, login}});
export const setLogin = (email, password, rememberMe, captcha) => ({type:SET_LOGIN, data:{email, password, rememberMe, captcha}});
// export const setAuthPhoto = (photo) => ({type: SET_PHOTO, photo});

export const authMe = () => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login))
                }
            })
    }
}

export const login = () => {
    return (dispatch) => {
        authAPI.login()
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch (setLogin(data.data.email, data.data.password, data.data.rememberMe, data.data.captcha));
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

