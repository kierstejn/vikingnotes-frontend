import * as actionTypes from '../actionTypes';
import {updateObject} from '../../util/updateObject';

const initialState = {
    loading: false,
    isDoingQuiz: false,
    error: null,
    mcq: null
};

const mcqStart = (state) => {
    return updateObject(state, {
        isDoingQuiz: true,
        error: null
    })
};

const mcqFetchStart = (state) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
};

const mcqFetchSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        mcq: action.mcq
    })
};

const mcqFetchFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
};

const mcqEnd = (state) => {
    return updateObject(state, {
        isDoingQuiz: false
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.MCQ_START: return mcqStart(state, action);
    case actionTypes.MCQ_FETCH_START: return mcqFetchStart(state, action);
    case actionTypes.MCQ_FETCH_SUCCESS: return mcqFetchSuccess(state, action);
    case actionTypes.MCQ_FETCH_FAIL: return mcqFetchFail(state, action);
    case actionTypes.MCQ_END: return mcqEnd(state, action);
    default: return state;
    }
};

export default reducer;
