import * as actionTypes from '../actionTypes';

export const mcqListFetchInitiate = () => {
    return {
        type: actionTypes.MCQ_LIST_FETCH_INITIATE
    }
};

export const mcqListFetchStart = () => {
    return {
        type: actionTypes.MCQ_LIST_FETCH_START
    };
};

export const mcqListFetchSuccess = (mcqList) => {
    return {
        type: actionTypes.MCQ_LIST_FETCH_SUCCESS,
        mcqList: mcqList
    };
};

export const mcqListFetchFail = (error) => {
    return {
        type: actionTypes.MCQ_LIST_FETCH_FAIL,
        error: error
    }
};

export const clearMCQList  = () => {
    return {
        type: actionTypes.CLEAR_MCQ_LIST
    }
};
