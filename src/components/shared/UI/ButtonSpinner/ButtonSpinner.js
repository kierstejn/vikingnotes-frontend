import React from 'react';
import './ButtonSpinner.css';

const buttonspinner = (props) => {
    const {style} = props;

    return (
        <div className="lds-spinner" style={style}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    )
};

export default buttonspinner;
