import React from 'react'

import MCQ from '../components/MCQ/MCQ/MCQ';
import styles from './pageStyles.module.css'

const mcqPage = () => {

    return (
        <div className={styles.containerMobile}>
            <MCQ/>
        </div>
    )
};

export default mcqPage;
