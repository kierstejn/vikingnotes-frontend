import React, {Fragment} from 'react';

import * as styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from "../../../../assets/images/vikingnotes.png";
import DrawerToggle from '../DrawerToggle/DrawerToggle';


const toolbar = ( props ) => (
    <header className={styles.Toolbar}>
        <img src={Logo} className={styles.Toolbar__Image}/>
        <Fragment>
			<nav className={styles.DesktopOnly}>
				<NavigationItems
					isAuthenticated={props.isAuthenticated}
				/>
			</nav>
			<DrawerToggle onClick={props.drawerToggleClicked} open={props.open}/>
        </Fragment>
    </header>
);

export default toolbar;
