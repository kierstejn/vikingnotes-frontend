import React from 'react';
import './NavbarItem.css';

const navbaritem = (props) => {
    return (
        <a className={"NavbarItem"} href={"#"}>{props.children}</a>
    )
};

export default navbaritem;