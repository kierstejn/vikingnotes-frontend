import React from 'react';
import './Box.css';

const box = props => (
    <div className="Box" style={props.style}>
        {props.children}
    </div>
);

export default box;
