import {updateObject} from "../../util/updateObject";
import * as actionTypes from "../actionTypes";

const initialState = {
    loading: false,
    error: null,
    mcqList: null,
    loadingDelete: false,
    isDeleted: false
};

const mcqListFetchStart = (state) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
};

const mcqListFetchSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        mcqList: action.mcqList
    })
};

const mcqListFetchFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
};

const clearMCQList = (state) => {
    return updateObject(state, {
        mcqList: null
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.MCQ_LIST_FETCH_START: return mcqListFetchStart(state, action);
    case actionTypes.MCQ_LIST_FETCH_SUCCESS: return mcqListFetchSuccess(state, action);
    case actionTypes.MCQ_LIST_FETCH_FAIL: return mcqListFetchFail(state, action);
    case actionTypes.CLEAR_MCQ_LIST: return clearMCQList(state, action);
    default: return state;
    }
};

export default reducer;
