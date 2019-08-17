import React from 'react'

import BookList from '../components/Book/BookList/BookList';
import styles from './pageStyles.module.css'

const bookListPage = () => {

	return (
		<div className={styles.containerMobile}>
			<BookList/>
		</div>
	)
};

export default bookListPage;
