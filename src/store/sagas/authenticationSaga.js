import { put, takeEvery, delay } from 'redux-saga/effects'

import axios from '../axios';

import * as actions from '../actions/index';
import * as actionTypes from '../actionTypes';

function* login(action) {
    yield put(actions.loginStart());
    const loginData = {
        email: action.email,
        password: action.password
    };
    yield delay(1500);
    try {
        const response = yield axios.post("/api/users/login", loginData);
        yield localStorage.setItem('token', response.data.token);
        yield localStorage.setItem('email', response.data.user.email);
        yield put(actions.loginSuccess(response.data.token, response.data.user.email))
    }
    catch (error) {
        yield put(actions.loginFail(error))
    }
}

export function* watchLogin() {
    yield takeEvery(actionTypes.LOGIN_INITIATE, login);
}

function* register(action) {
    yield put(actions.registerStart());
    yield delay(1500);
    const registerData = {
        email: action.email,
        password: action.password
    };
    try {
        const response = yield axios.post("/api/users/", registerData);
        yield localStorage.setItem('token', response.data.token);
        yield localStorage.setItem('email', response.data.user.email);
        yield put(actions.registerSuccess(response.data.token, response.data.user.email))
    }
    catch (error) {
        yield put(actions.registerFail(error))
    }
}

export function* watchRegister() {
    yield takeEvery(actionTypes.REGISTER_INITIATE, register);
}

function* logout() {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('email');
    yield put(actions.logout())
}

export function* watchLogout() {
    yield takeEvery(actionTypes.LOGOUT_INITIATE, logout);
}

function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem("token");
    if (!token) {
        yield put(actions.logout());
    } else {
	    const email = yield localStorage.getItem("email");
	    yield put(actions.loginSuccess(token, email));
    }
}

export function* watchAuthCheckStateSaga() {
	yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}






