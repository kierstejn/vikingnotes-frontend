import * as actionTypes from '../../../store/actionTypes';
import { updateObject } from '../../../util/updateObject';

const initialState = {
    showNotificationBar: false,
    message: '',
    alert: null,
};

const onShowNotificationBar = (state, action) => updateObject(state, {
    showNotificationBar: true,
    message: action.message,
    alert: action.alert,
});

const onHideNotificationBar = (state, action) => updateObject(state, {
    showNotificationBar: false,
    message: '',
    alert: null,
});


const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.ON_SHOW_NOTIFICATION_BAR: return onShowNotificationBar(state, action);
    case actionTypes.ON_HIDE_NOTIFICATION_BAR: return onHideNotificationBar(state, action);
    default: return state;
    }
};

export default reducer;
