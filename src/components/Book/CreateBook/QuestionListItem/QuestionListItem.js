import React from 'react';
import './QuestionListItem.css'
import DeleteIcon from '../../../shared/Icons/DeleteIcon/DeleteIcon';

const questionlistitem = (props) => {


    return(
        <div
            className={"QuestionListItem"}
            onClick={props.onClick}
            id={props.id}
        >
            {props.description}
            {props.deletable ? <DeleteIcon id={props.id} clicked={props.onDelete}/> : null}
        </div>
    )
}

export default questionlistitem;
