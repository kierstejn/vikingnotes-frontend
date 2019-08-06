import React, {Fragment} from 'react';
import Header from "../../UI/Header/Header";
import './AdminQuizModal.css';
import Button from '../../../components/UI/Button/Button.js';


const adminQuizModal = (props) => {
    return (
        <div className={'AdminQuizModal'}>
            <Header>{props.title}</Header>
            <hr/>
            <strong><p>Beskrivelse:</p></strong>
            <p>{props.description}</p>
            <div className={'Buttongroup'}>
                <Button style={{color: 'white', backgroundColor: 'Green', margin: '5px'}} clicked={props.onStartClicked}>START TEST</Button>
                <Button style={{color: 'navy', backgroundColor: 'white', margin: '5px'}} clicked={props.onEditClicked}>REDIGER</Button>
                <Button style={{color: 'red', backgroundColor: 'white', margin: '5px'}} clicked={props.onDeleteClicked}>SLET</Button>
            </div>
        </div>
    )
};

export default adminQuizModal;