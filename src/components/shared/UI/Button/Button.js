import React from 'react';
import PropTypes from 'prop-types'

import styles from './Button.module.css';

const button = (props) => {

    const {id, style, disabled, type, onClick, name, children, onSubmit} = props;

    return (
        <button
            id={id}
            name={name}
            style={style}
            disabled={disabled}
            className={`${styles.Button}`}
            type={type}
            onClick={onClick}
            onSubmit={onSubmit}
        >
            {children}
        </button>
    )
};

button.propTypes = {
    id: PropTypes.number,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func
};

export default button;
