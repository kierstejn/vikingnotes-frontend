import React from 'react';
import './QuestionList.css';
import Box from '../../../shared/UI/Box/Box';
import QuestionListItem from '../QuestionListItem/QuestionListItem';
import Button from '../../../shared/UI/Button/Button';

const questionlist = (props) => {

    let questions = [];
    for(let i = 0; i < props.numberOfQuestions; i++){
        questions.push(
            <QuestionListItem
                id={i}
                key={i}
                onClick={props.onQuestionClickedHandler}
                onDelete={props.onQuestionDeleteHandler}
                description={"Kapitel " + (i+1)}
                deletable
            />
        )
    }

    let list = (
        <div className={"QuestionList"}>
            <QuestionListItem
                description={"Bog information"}
                onClick={props.onShowInfoClickedHandler}
                onDelete={props.onQuestionDeleteHandler}
                deletable={false}
            />
            {questions}
        </div>
    );

    let addQuestionButton = (
        <Button style={{color: "white",
            backgroundColor: "green",
            width: "100%",
            height:"50px"
        }}
        onClick={props.onAddQuestionHandler}>Tilføj kapitel</Button>
    );




    return (
        <Box>
            {list}
            {addQuestionButton}
        </Box>
    )
}

export default questionlist;
