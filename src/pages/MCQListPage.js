import React from 'react'

import MCQList from '../components/MCQ/MCQList/MCQList';
import styles from './pageStyles.module.css'

const mcqListPage = () => {

    return (
        <div className={styles.containerMobile}>
            <MCQList/>
        </div>
    )
};

export default mcqListPage;
