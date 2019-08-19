import React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from './NavigationItem.module.css';

const navigationItem = ( props ) => (
    <li className={styles.NavigationItem}>
        <a aria-current="true" href={props.link}><h3>{props.children}</h3></a>
    </li>
);

export default navigationItem;
