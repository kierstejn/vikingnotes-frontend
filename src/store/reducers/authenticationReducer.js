import * as actionTypes from '../actionTypes';
import {updateObject} from '../../util/updateObject';


const initialState = {
    token: null,
    loadingLogin: false,
    loadingRegister: false,
    userId: null,
    email: null,
    errorLogin: null,
    errorRegister: null,
    role: null
};

const registerStart = (state) => {
    return updateObject(state, {
        errorRegister: null,
        loadingRegister: true
    })
};

const registerSuccess = (state, action) => {
    return updateObject(state, {
        errorRegister: null,
        loadingRegister: false,
        token: action.token,
        email: action.email
    });
};

const registerFail = (state, action) => {
    return updateObject(state, {
        errorRegister: action.error,
        loadingRegister: false
    });
};

const loginStart = (state) => {
    return updateObject(state, {
        errorLogin: null,
        loadingLogin: true
    });
};

const loginSuccess = (state, action) => {
    return updateObject(state, {
        errorLogin: null,
        loadingLogin: false,
        token: action.token,
        email: action.email
    });
};

const loginFail = (state, action) => {
    return updateObject(state, {
        errorLogin: action.error,
        loadingLogin: false
    });
};

const logout = (state) => {
    return updateObject(state, {
        token: null,
        email: null
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
    case actionTypes.LOGIN_START: return loginStart(state, action);
    case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
    case actionTypes.LOGIN_FAIL: return loginFail(state, action);
    case actionTypes.REGISTER_START: return registerStart(state, action);
    case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
    case actionTypes.REGISTER_FAIL: return registerFail(state, action);
    case actionTypes.LOGOUT: return logout(state, action);
    default: return state
    }
};

export default reducer;
