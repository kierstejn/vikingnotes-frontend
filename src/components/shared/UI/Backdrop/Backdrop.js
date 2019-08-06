import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.css';

const backdrop = props => {
    const { show, clicked } = props;
    return (
        show ? <div className="Backdrop" onClick={clicked}/> : null
    );
};

backdrop.propTypes = {
    show: PropTypes.bool,
    clicked: PropTypes.func
};

export default backdrop;
