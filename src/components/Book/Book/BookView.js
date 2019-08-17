import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import ChapterTable from './ChapterTable/ChapterTable';
import Box from '../../shared/UI/Box/Box';

import styles from './Book.module.css'

const bookView = (props) => {

    let mcqListStyle = {
        display: 'grid',
        gridTemplateColumns: '10vw auto 10vw',
    };

    return (
        <div style={mcqListStyle} className={styles.Book}>
            <div style={{gridColumn: 2}}>
                <Box style={{padding: '30px'}}>
                    <h2>{props.book.title}</h2>
                    <hr/>
					    <ChapterTable/>
                    </Box>
            </div>
        </div>
    )
};

bookView.propTypes = {
    showModal: PropTypes.bool,
    idClicked: PropTypes.number,
    onClickHandler: PropTypes.func,
    onCloseModalHandler: PropTypes.func,
    onStartQuizHandler: PropTypes.func,
    loading: PropTypes.bool,
    mcqList: PropTypes.object,
};

export default bookView


