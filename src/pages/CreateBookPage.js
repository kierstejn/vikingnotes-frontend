import React from 'react'

import CreateBook from '../components/Book/CreateBook/CreateMCQ';
import styles from './pageStyles.module.css'

const bookPage = () => {

	return (
		<div className={styles.containerMobile}>
			<CreateBook/>
		</div>
	)
};

export default bookPage;
