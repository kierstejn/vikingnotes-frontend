import * as actionTypes from '../actionTypes';

export const uploadMcqStart = () => {
    return{
        type: actionTypes.UPLOAD_MCQ_START
    };
};

export const uploadMcqSuccess = () => {
    return {
        type: actionTypes.UPLOAD_MCQ_SUCCESS
    };
};

export const uploadMcqFail = (error) => {
    return {
        type: actionTypes.UPLOAD_MCQ_FAIL,
        error: error
    };
};

export const uploadMcqInitiate = (mcq) => {
    return {
        type: actionTypes.UPLOAD_MCQ_INITIATE,
        mcq: mcq
    };
};

export const createMcqEnd = () => {
    return {
        type: actionTypes.CREATE_MCQ_END
    };
};

export const createMcqStart = () => {
    return {
        type: actionTypes.CREATE_MCQ_START
    };
};


