import React, {Fragment} from 'react';

import * as styles from './DrawerToggle.module.css';

const drawerToggle = (props) => {

    let classes = [styles.DrawerToggle];

    if(props.open){
        classes.push(styles.Open)
    } else {
        classes.push(styles.Close)
    }

    let drawerToggle = (
        <div className={classes.join(" ")} onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );

    return (
        <Fragment>
            {drawerToggle}
		</Fragment>
    );
};

export default drawerToggle;
