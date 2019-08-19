import React, {Fragment} from 'react'
import { MediaQuery } from 'react-responsive'

import Login from '../components/Authentication/Login/Login';
import styles from './pageStyles.module.css'
import Box from '../components/shared/UI/Box/Box';

const loginPage = () => {

    return (
        <Fragment>
            <MediaQuery maxWidth={499}>
                <div className={styles.containerMobile}>
                    <Login/>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={500}>
                <div className={`${styles.containerDesktop} ${styles.authenticationDesktop}`}>
                    <div style={{gridColumn: 2}}>
                        <Box>
                            <Login/>
                        </Box>
                    </div>
                </div>
            </MediaQuery>
        </Fragment>
    )
};

export default loginPage;
