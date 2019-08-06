import React from 'react';
import './SelectBox.module.css';
import styles from "./SelectBox.module.css";

const selectBox = (props) => {
    const defaultValue = (
        <option hidden defaultValue>
            Vælg {props.label}
        </option>
    );

    const options = props.options.map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ));

    let classNames = [styles.SelectBox];

    if (!props.valid && props.showValidity) {
        classNames.push(styles.Invalid);
    }

    const className = classNames.join(' ');

    return (
        <select
            className={className}
            name={props.name}
            id={props.id}
            onChange={props.onChange}
            value={props.value}
            style={props.style}
        >
            {defaultValue}
            {options}
        </select>
    );
};

export default selectBox;
