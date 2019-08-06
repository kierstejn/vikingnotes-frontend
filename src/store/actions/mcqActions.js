import * as actionTypes from '../actionTypes';

export const mcqStart = () => {
    return {
        type: actionTypes.MCQ_START
    };
};

export const mcqEnd = () => {
    return {
        type: actionTypes.MCQ_END
    };
};

export const mcqFetchStart = () => {
    return {
        type: actionTypes.MCQ_FETCH_START
    };
};

export const mcqFetchSuccess = (mcq) => {
    return {
        type: actionTypes.MCQ_FETCH_SUCCESS,
        mcq: mcq
    };
};

export const mcqFetchFail = (error) => {
    return {
        type: actionTypes.MCQ_FETCH_FAIL,
        error: error
    }
};

export const mcqFetchInitiate = (mcqId) => {
    return {
        type: actionTypes.MCQ_FETCH_INITIATE,
        mcqId: mcqId
    }
};
