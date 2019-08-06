import * as actionTypes from '../actionTypes';
import {updateObject} from '../../util/updateObject';

const initialState = {
    uploading: false,
    error: null,
    isUploaded: false
};

const uploadMcqStart = (state) => {
    return updateObject(state, {
        uploading: true,
        error: null,

    })
};

const uploadMcqSuccess = (state) => {
    return updateObject(state, {
        uploading: false,
        error: null,
        isUploaded: true
    })
};

const uploadMcqFail = (state, action) => {
    return updateObject(state, {
        uploading: false,
        error: action.error
    })
};

const createMcqEnd = (state) => {
    return updateObject(state, {
        isUploaded: false
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.UPLOAD_MCQ_START: return uploadMcqStart(state, action);
    case actionTypes.UPLOAD_MCQ_SUCCESS: return uploadMcqSuccess(state, action);
    case actionTypes.UPLOAD_MCQ_FAIL: return uploadMcqFail(state, action);
    case actionTypes.CREATE_MCQ_END: return createMcqEnd(state, action);
    default: return state;
    }
};

export default reducer;
