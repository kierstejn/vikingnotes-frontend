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
        gridTemplateRows: '35px 100px 35px 35px 35px auto',
        gridRowGap: '30px',
    };

    let textAreaStyle = {
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRow: 2
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

			<label style={{gridRow: 1, gridColumn: '1/3'}}>
				Kapitel navn (valgfrit):
				<Input
					name={"question"}
					value={props.question.question}
					onChange={props.onQuestionChangedHandler}
					autoComplete={"off"}
					showValidity={props.showValidity}
					valid={validate(props.rules.question, props.question.question)}
				/>
			</label>
            <label style={textAreaStyle}>
                Beskrivelse (valgfrit):
                <TextArea
                    name={"caseText"}
                    value={props.question.caseText}
                    onChange={props.onCaseTextChangeHandler}
                    showValidity={props.showValidity}
                    valid={validate(props.rules.caseText, props.question.caseText)}
                />
            </label>


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
