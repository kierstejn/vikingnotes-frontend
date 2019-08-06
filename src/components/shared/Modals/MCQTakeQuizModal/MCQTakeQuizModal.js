import React, {Fragment} from 'react';
import Header from "../../UI/Header/Header";
import './MCQTakeQuizModal.css';
import Button from '../../UI/Button/Button';


const MCQTakeQuizModal = (props) => {
    return (
        <div className={'MCQTakeQuizModal'}>
            <Header>{props.title}</Header>
            <hr/>

            <strong><p>Beskrivelse:</p></strong>
            <p>{props.description}</p>
            <Button style={{color: 'white', backgroundColor: 'green', margin: '0', float: 'right'}} onClick={props.onStartClicked}>START TEST</Button>

        </div>
    )
};

export default MCQTakeQuizModal;
