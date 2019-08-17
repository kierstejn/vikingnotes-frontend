import * as actionTypes from '../actionTypes';


export const registerStart = () => {
    return{
        type: actionTypes.REGISTER_START
    }
};

export const registerInitiate = (email, password) => {
    return {
        type: actionTypes.REGISTER_INITIATE,
        email: email,
        password: password
    };
};

export const registerSuccess = () => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
    };
};

export const registerFail = (error) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        error: error
    };
};

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

export const loginInitiate = (email, password) => {
    return {
        type: actionTypes.LOGIN_INITIATE,
        email: email,
        password: password
    };
};

export const loginSuccess = (token, email) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        email: email
    };
};

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
};


export const logoutInitiate = () => {
    return {
        type: actionTypes.LOGOUT_INITIATE
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    };
};

export const authCheckState = () => {
	return {
		type: actionTypes.AUTH_CHECK_STATE
	};
};
