import React, {Fragment} from 'react';
import styles from './MCQQuestions.module.css';
import MCQQuestionField from '../MCQQuestionField/MCQQuestionField';

const mcqquestions = (props) => {


    let imageStyle = {
        maxWidth: '400px',
        maxHeight: '500px',
        margin: '0 auto',
        justifyContent: 'space-around'
    };

    let mcqQuestionArray = props.questionClicked === null ?
        props.question.answers.map(item => {
            return (<MCQQuestionField key={item.id}
                id={item.id}
                answerPossibility={item.value}
                clicked={props.clicked}/>)
        }) :
        props.question.answers.map(item => {
            let showAnswerClass = '';
            debugger;
            if(item.correct){
                showAnswerClass = "Right";
            } else if(item.id.toString() === props.questionClicked){
                showAnswerClass = "Wrong"
            }
            return (<MCQQuestionField key={item.id}
                showAnswerClass={showAnswerClass}
                id={item.id}
                answerPossibility={item.value}
                clicked={props.clicked}/>)
        });

    return(
        <div className={styles.MCQQuestions}>
            <div>
                <div>
                    {props.question.casetext ? <h4 className={styles.MCQQuestionsCaseHeader}>Case: </h4> : null}
                    {props.question.casetext ? <p className={styles.MCQQuestionsCaseText}>{props.question.casetext}</p> : null}
				</div>
                <div>
                    <h4 className={styles.MCQQuestionsQuestionHeader}>Spørgsmål: </h4>
                    <p className={styles.MCQQuestionsQuestionText}>{props.question.question}</p>
				</div>
                {mcqQuestionArray}
            </div>

            <div style={{justifySelf: 'center', alignSelf: 'center'}}>
                {props.question.imageurl ? <img src={props.question.imageurl} style={imageStyle} alt={"questionImage"}/> : null}
            </div>
        </div>
    );
};

export default mcqquestions;


