import React from 'react';

import * as styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = ( props ) => (
    <header className={styles.Toolbar}>
        <nav className={styles.DesktopOnly}>
            <NavigationItems isAuthenticated={true} />
        </nav>
    </header>
);

export default toolbar;
