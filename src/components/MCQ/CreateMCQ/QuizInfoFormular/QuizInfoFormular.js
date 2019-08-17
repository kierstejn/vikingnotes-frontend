import React from 'react';

import './QuizInfoFormular.css';
import Box from '../../../shared/UI/Box/Box';
import TextArea from '../../../shared/UI/TextArea/TextArea';
import Input from '../../../shared/UI/Input/Input';
import SelectBox from '../../../shared/UI/SelectBox/SelectBox';
import {validate} from '../../../../util/validate/validate';

const quizinfoformular = (props) => {

    let formularStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '35px 35px 100px 35px 35px 35px',
        gridRowGap: '30px',
        gridColumnGap: '30px',
        gridColumn: 1
    };

    let textAreaStyle = {
        gridColumnStart: 1,
        gridColumnEnd: 5,
        gridRow: 3
    };

    let titleStyle = {
        gridColumnStart: 1,
        gridColumnEnd: 5,
        gridRow: 1
    };

    let bookSelectBoxStyle = {
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRow: 2
    };

    let chapterSelectBoxStyle = {
        gridColumnStart: 3,
        gridColumnEnd: 5,
        gridRow: 2
    };


    let formular = (
        <div className={"QuizInfoFormular"} style={formularStyle}>

            <label style={titleStyle}>
                Titel:
                <Input
                    name={"title"}
                    value={props.title}
                    onChange={props.onTitleChangedHandler}
                    autoComplete={"off"}
                    valid={validate(props.rules.title, props.title)}
                    showValidity={props.showValidity}
                />
            </label>

            <label style={bookSelectBoxStyle}>
                Bøger:
                <SelectBox
                    label={"bog"}
                    value={props.semester}
                    options={props.books}
                    onChange={props.onSemesterChangedHandler}
                    valid={validate(props.rules.semester, props.semester)}
                    showValidity={props.showValidity}
                />
            </label>

            <label style={chapterSelectBoxStyle}>
                Kapitler:
                <SelectBox
                    label={"kapitel"}
                    value={props.semester}
                    options={props.chapters}
                    onChange={props.onSubjectChangedHandler}
                    valid={validate(props.rules.subject, props.subject)}
                    showValidity={props.showValidity}
                />
            </label>

            <label style={textAreaStyle}>
                Beskrivelse af quiz:
                <TextArea
                    name={"caseText"}
                    value={props.description}
                    onChange={props.onDescriptionChangedHandler}
                    valid={validate(props.rules.description, props.description)}
                    showValidity={props.showValidity}
                />
            </label>

        </div>
    )

    return(
        <Box>
            {formular}
        </Box>
    )
}

export default quizinfoformular;
