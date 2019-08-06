import React, {Fragment} from 'react';
import './MCQQuestionField.css';

const mcqquestionfield = (props) => {
    let classesArray = ['MCQQuestionField'];

    if(props.showAnswerClass !== ''){
        classesArray.push(props.showAnswerClass);
    }

    console.log(classesArray);

    const classes = classesArray.join(" ");

    return(
        <div className={classes} id={props.id} onClick={props.clicked}>{props.answerPossibility}</div>
    );
};

export default mcqquestionfield;
