import React, {Fragment} from 'react'
import { MediaQuery } from 'react-responsive'

import Register from '../components/Authentication/Register/Register';
import styles from './pageStyles.module.css'

const registerPage = () => {

    return (
        <Fragment>
            <MediaQuery maxWidth={700}>
                <div className={styles.containerMobile}>
                    <Register/>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={701}>
                <div className={`${styles.containerDesktop} ${styles.authenticationDesktop}`} >
                    <div style={{gridColumn: 2}}>
                        <Register/>
                    </div>
                </div>
            </MediaQuery>
        </Fragment>
    )
};

export default registerPage;
