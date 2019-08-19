import React from 'react';

const header = props => (
    <div className="Header">
        <h2 style={props.style}>{props.children}</h2>
    </div>
);

export default header;
