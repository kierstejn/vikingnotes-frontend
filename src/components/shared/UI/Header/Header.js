import React, { Fragment } from 'react';
import './Header.css';

const header = props => (
    <div className="Header">
        <h3 style={props.style}>{props.children}</h3>
    </div>
);

export default header;
