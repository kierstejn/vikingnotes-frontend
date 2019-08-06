import { put, takeEvery, delay } from 'redux-saga/effects'

import axios from '../axios';

import * as actions from '../actions/index';
import * as actionTypes from '../actionTypes';
import {shuffle} from '../../util/shuffle'

function* mcqFetch(action) {
    yield put(actions.mcqFetchStart());
    let url = '/api/mcq/' + action.mcqId;
    yield delay(1000);
    try {
        const response = yield axios.get(url);
        //let updatedMcq = yield Object.assign({}, response.data);
        // for (let i = 0; i < updatedMcq.questions.length; i++) {
        //     yield shuffle(updatedMcq.questions[i].answers);
        // }
        yield put(actions.mcqFetchSuccess(response.data));
    }
    catch (error) {
        yield put(actions.mcqFetchFail(error));
    }
}

export function* watchMcqListFetch() {
    yield takeEvery(actionTypes.MCQ_FETCH_INITIATE, mcqFetch);
}
