import React from 'react'

import Book from '../components/Book/Book/Book';
import styles from './pageStyles.module.css'

const bookPage = () => {

	return (
		<div className={styles.containerMobile}>
			<Book/>
		</div>
	)
};

export default bookPage;
