import React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from './NavigationItem.module.css';

const navigationItem = ( props ) => (
    <li className={styles.NavigationItem}>
		<NavLink to={props.link}><h3>{props.children}</h3></NavLink>
    </li>
);

export default navigationItem;
