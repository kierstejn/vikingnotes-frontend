import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import styles from './MCQ.module.css'
import MCQHeader from "../../shared/UI/Header/Header";
import MCQQuestions from './MCQQuestions/MCQQuestions';
import Spinner from '../../shared/UI/Spinner/Spinner';
import Button from '../../shared/UI/Button/Button';
import * as actions from "../../../store/actions";
import Box from "../../shared/UI/Box/Box";

class MCQ extends Component {

    state = {
        questionClicked: null,
        answers:[],
        index: 0,
    };

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.onFetchMcq(id);
    }

    onClickedHandler = (event) => {
        if(this.state.questionClicked === null) {
            this.setState({questionClicked: event.target.id});
        }
    };

    onContinueHandler = () => {
        this.setState(prevState => {
            return {questionClicked: null, index: prevState.index+1}
        });
    };

    endQuizHandler = () => {
        this.props.history.replace("/quiz-list");
    };


    render(){
        // let updatedQuestion = {
        //     ...question
        // }
        //
        // updatedQuestion.answerPossibilities = this.shuffle(updatedQuestion.answerPossibilities);
        //
        // console.log(question);
        // console.log(updatedQuestion);

        const {loading, mcq} = this.props;
        const {index, questionClicked} = this.state;

        let quiz = null;

        if(loading){
            quiz = <Spinner/>
        }

        if(mcq !== null && !loading){
            quiz = (
                <div className={styles.MCQ}>
                    <MCQHeader style={{paddingLeft: '20px', textAlign: 'left'}}>{mcq.title}</MCQHeader>
                    <p style={{display: 'inline', float: 'right'}}>{index+1} / {mcq.questions.length}</p>

                    <hr/>
                    <MCQQuestions question={mcq.questions[index]}
                        questionClicked={questionClicked}
                        clicked={this.onClickedHandler}/>
                    <div style={{marginTop: '15px'}}>
                        {questionClicked !== null && index !== mcq.questions.length - 1 ?
                            <Button style={{backgroundColor: '#828282', color: 'white', marginLeft: '20px'}} onClick={this.onContinueHandler}>NÆSTE SPØRGSMÅL</Button> : null}
                        {mcq.questions.length-1 === index && questionClicked !== null ?
                            <Button style={{backgroundColor: 'green', color: 'white', marginLeft: '20px', float: 'right'}} onClick={this.endQuizHandler}>AFSLUT QUIZ</Button> : null}
                    </div>
                </div>
            );
        }

        return (
            <Box>
                {quiz}
            </Box>
        );
    }
}

MCQ.propTypes = {
    history: PropTypes.object,
    loading: PropTypes.bool,
    mcq: PropTypes.object,
    onFetchMcq: PropTypes.func
};

const mapStateToProps = state => {
    return {
        loading: state.mcq.loading,
        mcq: state.mcq.mcq
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMcq:(mcqID) => dispatch(actions.mcqFetchInitiate(mcqID))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MCQ));
