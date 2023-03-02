import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_ERROR = 'auth/SET_ERROR';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';

let initialState = {
    id: null,
    photo: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    errorMessage: '',
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_ERROR:
            return {...state, errorMessage: action.errorMessage}

        case SET_CAPTCHA:
            return {...state, captchaUrl: action.url}

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});
export const setError = (errorMessage) => ({type: SET_ERROR, errorMessage});
export const setCaptcha = (url) => ({type: SET_CAPTCHA, url});


export const authMe = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        dispatch(authMe());
    } else {
        if (response.resultCode === 10) {
           dispatch(getCaptcha());
        }
        dispatch(setError(response.messages[0]));
    }
}


export const getCaptcha = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    dispatch(setCaptcha(response.data.url));

}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;

