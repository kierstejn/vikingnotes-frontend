import React from 'react'

import CreateMCQ from '../components/MCQ/CreateMCQ/CreateMCQ';
import styles from './pageStyles.module.css'

const createMcqPage = () => {

    return (
        <div className={styles.containerMobile}>
            <CreateMCQ/>
        </div>
    )
};

export default createMcqPage;
