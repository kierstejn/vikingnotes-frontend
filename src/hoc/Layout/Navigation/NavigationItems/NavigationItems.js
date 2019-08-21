import React, {Fragment} from 'react';

import * as styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={styles.NavigationItems} onClick={props.on}>
        {props.isAuthenticated ?
            <Fragment>
                <NavigationItem link="/quiz/list">quizzer</NavigationItem>
                <NavigationItem link="/mcq/create">opret quiz</NavigationItem>
				<NavigationItem link="/logout">log ud</NavigationItem>
            </Fragment>
            :
            <Fragment>
                <NavigationItem link="/register">opret bruger</NavigationItem>
				<NavigationItem link="/login">log ind</NavigationItem>
            </Fragment>
        }
    </ul>
);

export default navigationItems;
