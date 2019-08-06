import React, {Fragment} from 'react';
import Header from "../../UI/Header/Header";
import './DeleteConfirmationBox.css';
import Button from '../../../components/UI/Button/Button.js';


const deleteconfirmationbox = (props) => {

    let type = props.type === 'mcq' ? "QUIZZEN" : "BRUGEREN";

    return (
        <div className={'DeleteConfirmationBox'}>
            <h3>VIL DU SLETTE {type}?</h3>
            <div className={'Buttongroup'}>
                <Button style={{color: 'white', backgroundColor: 'green'}} clicked={props.onDeleteConfirmed} >BEKRÆFT</Button>
                <Button style={{color: 'white', backgroundColor: 'red'}} clicked={props.onDeleteCancel} >FORTRYD</Button>
            </div>
        </div>
    )
};

export default deleteconfirmationbox;