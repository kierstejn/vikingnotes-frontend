import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga'


import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import authenticationReducer from './store/reducers/authenticationReducer';
import mcqListReducer from './store/reducers/mcqListReducer';
import mcqReducer from './store/reducers/mcqReducer';
import createMcqReducer from './store/reducers/createMcqReducer';
import rootSaga from './store/sagas/index';

require('dotenv').config();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    mcqList: mcqListReducer,
    mcq: mcqReducer,
    createMcq: createMcqReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,composeEnhancers (
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
