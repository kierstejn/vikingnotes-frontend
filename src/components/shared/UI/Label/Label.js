import React from 'react';
import PropTypes from 'prop-types'

const label = (props) => {

    const { value } = props;

    return (
        <label>{value}</label>
    )
};

label.propTypes = {
    value: PropTypes.string
};

export default label;
