import React from 'react';
import PropTypes from 'prop-types';

import './QuestionFormular.css';
import Box from '../../../shared/UI/Box/Box';
import TextArea from '../../../shared/UI/TextArea/TextArea';
import Input from '../../../shared/UI/Input/Input';
import ImageUpload from '../ImageUpload/ImageUpload';
import {validate} from "../../../../util/validate/validate";

const questionformular = ({...props}) => {

    let formularStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '100px 35px 35px 35px 35px auto',
        gridRowGap: '30px',
    };

    let textAreaStyle = {
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRow: 1
    };

    let url = '';
    if(props.question.image !== null) {
        url = URL.createObjectURL(props.question.image);
    }

    let imageStyle = {
        gridRow: 6,
        gridColumn: '2/3',
        width: '60%',
        margin: '0 auto'
    };


    let formular = (
        <div className={"QuestionFormular"} style={formularStyle}>
            <label style={textAreaStyle}>
                Case (valgfrit):
                <TextArea
                    name={"caseText"}
                    value={props.question.caseText}
                    onChange={props.onCaseTextChangeHandler}
                    showValidity={props.showValidity}
                    valid={validate(props.rules.caseText, props.question.caseText)}
                />
            </label>
            <label style={{gridRow: 2, gridColumn: '1/3'}}>
                Spørgsmål:
                <Input
                    name={"question"}
                    value={props.question.question}
                    onChange={props.onQuestionChangedHandler}
                    autoComplete={"off"}
                    showValidity={props.showValidity}
                    valid={validate(props.rules.question, props.question.question)}
                />
            </label>

            <label style={{gridRow: 3, gridColumn: '1/3'}}>
                Svar mulighed 1 (rigtigt svar):
                <Input
                    name={"answer"}
                    id={0}
                    onChange={props.onAnswersChangedHandler}
                    value={props.question.answers[0].value}
                    autoComplete={"off"}
                    showValidity={props.showValidity}
                    valid={validate(props.rules.answer, props.question.answers[0].value)}
                />
            </label>

            <label style={{gridRow: 4, gridColumn: '1/3'}}>
                Svar mulighed 2:
                <Input
                    name={"answers"}
                    id={1}
                    onChange={props.onAnswersChangedHandler}
                    value={props.question.answers[1].value}
                    autoComplete={"off"}
                    showValidity={props.showValidity}
                    valid={validate(props.rules.answer, props.question.answers[1].value)}
                />
            </label>

            <label style={{gridRow: 5, gridColumn: '1/3'}}>
                Svar mulighed 3:
                <Input
                    name={"answer"}
                    id={2}
                    onChange={props.onAnswersChangedHandler}
                    value={props.question.answers[2].value}
                    autoComplete={"off"}
                    showValidity={props.showValidity}
                    valid={validate(props.rules.answer, props.question.answers[2].value)}
                />
            </label>
            <ImageUpload
                image={props.question.image}
                onSubmit={props.onImageSubmittedHandler}
                onDelete={props.onDeleteImageHandler}
                style={{gridRow: 6, gridColumn: '1/2', marginTop: '5px', maxHeight: '40px'}}
            />
            {props.question.image ? <img id={"image"} src={url} style={imageStyle} alt={"Preview"}/> : null}

        </div>
    );

    return(
        <Box>
            {formular}
        </Box>
    )
};

questionformular.propTypes = {
    caseText: PropTypes.string,
    rules: PropTypes.object,
    showValidity: PropTypes.bool,
    onDeleteImageHandler: PropTypes.func,
    onImageSubmittedHandler: PropTypes.func,
    question: PropTypes.object
};

export default questionformular;
