import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../shared/UI/Spinner/Spinner';
import BookTable from './BookTable/BookTable';
import Box from '../../shared/UI/Box/Box';

import styles from './BookList.module.css'

const bookListView = (props) => {

    let mcqListStyle = {
        display: 'grid',
        gridTemplateColumns: '10vw auto 10vw',
    };

    return (
        <div style={mcqListStyle} className={styles.BookList}>
            <div style={{gridColumn: 2}}>
                <Box style={{padding: '30px'}}>
                    <h2>Bøger</h2>
                    <hr/>
					    <BookTable onClickHandler={props.onClickHandler}/>
                    </Box>
            </div>
        </div>
    )
};

bookListView.propTypes = {
    showModal: PropTypes.bool,
    idClicked: PropTypes.number,
    onClickHandler: PropTypes.func,
    onCloseModalHandler: PropTypes.func,
    onStartQuizHandler: PropTypes.func,
    loading: PropTypes.bool,
    mcqList: PropTypes.object,

};

export default bookListView


