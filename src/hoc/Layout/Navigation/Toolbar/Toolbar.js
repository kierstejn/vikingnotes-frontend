import React from 'react';

import * as styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from "../../../../assets/images/vikingnotes.png";


const toolbar = ( props ) => (
    <header className={styles.Toolbar}>
        <img src={Logo} className={styles.Toolbar__Image}/>
        <nav className={styles.DesktopOnly}>
            <NavigationItems
                isAuthenticated={props.isAuthenticated}
            />
        </nav>
    </header>
);

export default toolbar;
