import { put, takeEvery, delay } from 'redux-saga/effects'

import axios from '../axios';

import * as actions from '../actions/index';
import * as actionTypes from '../actionTypes';

function* onUploadMCQ(action) {
    yield put(actions.uploadMcqStart());
    yield delay(1500);
    let {mcq} = action;
    let form = new FormData();
    let imageInfo = [];
    yield mcq.questions.forEach((item, index) => {
        if(item.image !== null) {
            form.append('image',item.image);
            imageInfo.push(index)
        }
    });
    yield form.append('imageInfo', JSON.stringify(imageInfo));
    yield form.append('mcq', JSON.stringify(mcq));

    let url = "/api/mcq/create";

    try {
        const response = yield axios.post(url, form, {headers: {"x-auth": localStorage.getItem('token')}});
        yield put(actions.uploadMcqSuccess());
    }
    catch (error) {
        yield put(actions.uploadMcqFail(error))
    }
}

export function* watchCreateMcq() {
    yield takeEvery(actionTypes.UPLOAD_MCQ_INITIATE, onUploadMCQ)
}
