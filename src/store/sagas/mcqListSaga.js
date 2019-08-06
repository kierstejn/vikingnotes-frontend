import { put, takeEvery, delay } from 'redux-saga/effects'

import axios from '../axios';

import * as actions from '../actions/index';
import * as actionTypes from '../actionTypes';

function* mcqListFetch() {
    yield put(actions.mcqListFetchStart());
    yield delay(1500);
    try {
        const response = yield axios.get("/api/mcq/");
        yield put(actions.mcqListFetchSuccess(response.data))
    }
    catch (error) {
        yield put(actions.mcqListFetchFail(error))
    }
}

export function* watchMcqListFetch() {
    yield takeEvery(actionTypes.MCQ_LIST_FETCH_INITIATE, mcqListFetch);
}
