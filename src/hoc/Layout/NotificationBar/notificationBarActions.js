import * as actionTypes from '../../../store/actionTypes';
import axios from '../../../axios';

export const onShowNotificationBar = (message, alert) => ({
    type: actionTypes.ON_SHOW_NOTIFICATION_BAR,
    message,
    alert,
});

export const onHideNotificationBar = () => ({
    type: actionTypes.ON_HIDE_NOTIFICATION_BAR,
});
