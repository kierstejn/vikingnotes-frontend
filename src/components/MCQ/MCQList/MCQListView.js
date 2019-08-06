import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../shared/UI/Spinner/Spinner';
import MCQTable from './MCQTable/MCQTable';
import MCQTakeQuizModal from '../../shared/Modals/MCQTakeQuizModal/MCQTakeQuizModal';
import Modal from '../../shared/UI/Modal/Modal';
import Box from '../../shared/UI/Box/Box';

import styles from './MCQList.module.css'

const mcqlistview = (props) => {

    const {showModal, idClicked, onClickHandler, onCloseModalHandler, onStartQuizHandler, loading, mcqList} = props;

    let mcqListStyle = {
        display: 'grid',
        gridTemplateColumns: '10vw auto 10vw',
    };

    let list = null;
    let modal = null;

    if(loading){
        list = <Spinner/>;
    }

    if(mcqList !== null){
        list = <MCQTable onClick={onClickHandler} list={mcqList}/>;
    }

    if(showModal) {
        const mcq = mcqList.find(mcq => {
            return mcq.id === idClicked
        });
        modal = <MCQTakeQuizModal
            onStartClicked={onStartQuizHandler}
            title={mcq.title}
            description={mcq.description}/>

    }

    return (
        <Fragment>
            <Modal close={onCloseModalHandler}
				   onStartClicked={onStartQuizHandler}
				   show={showModal}>{modal}</Modal>
            <div style={mcqListStyle} className={styles.MCQList}>
                <div style={{gridColumn: 2}}>
                    <Box style={{padding: '30px'}}>
                        <h2>Quizzer</h2>
                        <hr/>
                        {list}
                    </Box>
                </div>
            </div>
        </Fragment>
    )
};

mcqlistview.propTypes = {
    showModal: PropTypes.bool,
    idClicked: PropTypes.number,
    onClickHandler: PropTypes.func,
    onCloseModalHandler: PropTypes.func,
    onStartQuizHandler: PropTypes.func,
    loading: PropTypes.bool,
    mcqList: PropTypes.object,

};

export default mcqlistview


