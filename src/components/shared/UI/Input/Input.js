import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';
import { validate } from '../../../../util/validate/validate';

const input = (props) => {

    const {value, showValidity, placeholder, autoComplete, required, type, name, id, onChange, valid} = props;

    let classNames = [styles.InputElement];

    if (!valid && showValidity) {
        classNames.push(styles.Invalid);
    }
    const className = classNames.join(' ');

    return (
        <input
            className={className}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type={type}
            name={name}
            id={id}
            autoComplete={autoComplete}
            required={required}
        />
    );
};

input.propTypes = {
    rules: PropTypes.object,
    value: PropTypes.string,
    showValidity: PropTypes.bool,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.bool,
    required: PropTypes.bool,
    type: PropTypes.oneOf(['email', 'password', 'number', 'text']),
    name: PropTypes.string,
    id: PropTypes.number,
    onChange: PropTypes.func,
    valid: PropTypes.bool
};

input.defaultProps = {

};


export default input;
