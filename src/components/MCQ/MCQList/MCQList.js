import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import * as actions from '../../../store/actions';
import MCQListView from './MCQListView';
import PropTypes from "prop-types";

class MCQList extends Component {

    state = {
        showModal: false,
        idClicked: null
    };

    componentDidMount(){
        this.props.mcqListFetch();
    }

    onClickHandler = (event, id) => {
        this.setState({idClicked: id, showModal: true});
    };

    onCloseModalHandler = () => {
        this.setState({showModal: false, idClicked: null});
    };

    onStartQuizHandler = () => {
        this.props.history.replace('/mcq/' + this.state.idClicked);
    };

    componentWillUnmount(){
        this.props.clearMCQList();
    }


    render(){

        const {showModal, idClicked} = this.state;
        const {loading, mcqList} = this.props;

        return(
            <MCQListView
                showModal={showModal}
                idClicked={idClicked}
                onClickHandler={this.onClickHandler}
                onCloseModalHandler={this.onCloseModalHandler}
                onStartQuizHandler={this.onStartQuizHandler}
                loading={loading}
                mcqList={mcqList}
            />
        );
    }
}

MCQList.propTypes = {
    clearMCQList: PropTypes.func,
    mcqListFetch: PropTypes.func,
    history: PropTypes.object,
    loading: PropTypes.bool,
    mcqList: PropTypes.object
};

const mapStateToProps = state => {
    return {
        loading: state.mcqList.loading,
        mcqList: state.mcqList.mcqList,
        error: state.mcqList.error,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        mcqListFetch:() => dispatch(actions.mcqListFetchInitiate()),
        clearMCQList:() => dispatch(actions.clearMCQList()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MCQList));
