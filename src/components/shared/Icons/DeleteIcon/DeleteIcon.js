import React from 'react';
import PropTypes from 'prop-types';
import './DeleteIcon.css';


const deleteicon = (props) => {
    const { style, id, clicked } = props;

    return (
        <svg
            className="DeleteIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={style}
            id={id}
            onClick={clicked}
        >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
            <path fill="none" d="M0 0h24v24H0V0z" />
        </svg>
    );
};


deleteicon.propTypes = {
    style: PropTypes.instanceOf(PropTypes.object),
    clicked: PropTypes.func,
    id: PropTypes.number
};

export default deleteicon;
