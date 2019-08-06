import React from 'react';
import './NotificationBar.css';

const notificationBar = (props) => {
    let backgroundColor = '#c0392b';
    if (props.alert === 'success') {
        backgroundColor = 'green';
    }

    const style = {
        backgroundColor,
    };

    return (
        <div className="NotificationBar" style={style}>
            <div>{props.message}</div>
            <label onClick={props.close}>X</label>
        </div>
    );
};


export default notificationBar;
