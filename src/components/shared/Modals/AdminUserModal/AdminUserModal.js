import React, {Fragment} from 'react';
import Header from "../../UI/Header/Header";
import './AdminUserModal.css';
import Button from '../../../components/UI/Button/Button.js';


const adminUserModal = (props) => {
    return (
        <div className={'AdminQuizModal'}>
            <Header>Bruger</Header>
            <hr/>
            <p><strong>Email:</strong></p>
            <p>{props.email}</p>
            <div className={'Buttongroup'}>
                <Button style={{color: 'red', backgroundColor: 'white', margin: '5px'}} clicked={props.onDeleteClicked}>SLET BRUGER</Button>
            </div>
        </div>
    )
};

export default adminUserModal;