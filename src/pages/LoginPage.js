import React, {Fragment} from 'react'
import { MediaQuery } from 'react-responsive'

import Login from '../components/Authentication/Login/Login';
import styles from './pageStyles.module.css'

const loginPage = () => {

    return (
        <Fragment>
            <MediaQuery maxWidth={700}>
                <div className={styles.containerMobile}>
                    <Login/>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={701}>
                <div className={`${styles.containerDesktop} ${styles.authenticationDesktop}`}>
                    <div style={{gridColumn: 2}}>
                        <Login/>
                    </div>
                </div>
            </MediaQuery>
        </Fragment>
    )
};

export default loginPage;
