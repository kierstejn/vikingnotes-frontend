import React, {Fragment} from 'react'
import { MediaQuery } from 'react-responsive'

import Register from '../components/Authentication/Register/Register';
import styles from './pageStyles.module.css'
import Box from '../components/shared/UI/Box/Box';

const registerPage = () => {

    return (
        <Fragment>
            <MediaQuery maxWidth={599}>
                <div className={styles.containerMobile}>
                    <Register/>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={600}>
                <div className={`${styles.containerDesktop} ${styles.authenticationDesktop}`} >
                    <div style={{gridColumn: 2}}>
                        <Box>
                            <Register/>
                        </Box>
                    </div>
                </div>
            </MediaQuery>
        </Fragment>
    )
};

export default registerPage;
