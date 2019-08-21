import React, {Fragment} from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import * as styles from './SideDrawer.module.css';
import Backdrop from '../../../../components/shared/UI/Backdrop/Backdrop';

const sideDrawer = ( props ) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    let backdrop;
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
        backdrop = <Backdrop show={props.open} clicked={props.closed}/>
    }
    return (
        <div>
            <div className={styles.BackDrop}>
			    {backdrop}
			</div>
            <div className={attachedClasses.join(' ')}>
                <nav onClick={props.drawerToggleClicked}>
                    <NavigationItems isAuthenticated={props.isAuthenticated} />
                </nav>
            </div>
        </div>
    );
};

export default sideDrawer;
