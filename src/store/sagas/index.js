import { fork, all } from 'redux-saga/effects'

import * as authenticationSagas from './authenticationSaga';
import * as mcqListSagas from './mcqListSaga';
import * as mcqSagas from './mcqSaga';
import * as createMcqSagas from './createMcqSaga';

export default function* rootSaga() {
    yield all([
        ...Object.values(authenticationSagas),
        ...Object.values(mcqListSagas),
        ...Object.values(mcqSagas),
        ...Object.values(createMcqSagas)
    ].map(fork))
}
