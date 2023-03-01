import {authAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_ERROR = 'auth/SET_ERROR';

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
            return {...state, errorMessage: action.errorMessage}

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});
export const setError = (errorMessage) => ({type: SET_ERROR, errorMessage});


export const authMe = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(authMe());
    }
    if (response.resultCode !== 0) {
        dispatch(setError(response.messages[0]));
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;

