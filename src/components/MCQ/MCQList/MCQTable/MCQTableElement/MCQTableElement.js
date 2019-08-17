import React from 'react';
import './MCQTableElement.css';

const MCQTableElement = (props) => {

    let style = {
        display: 'grid',
        gridTemplateColumns: '70px 200px auto',
        gridTemplateRows: '50px',

    };

    if(props.style){
        style = Object.assign(style, props.style)
    }

    let classNamesArray = ["MCQTableElement"];
    if(props.hover){
        classNamesArray.push("Hover")
    }
    const classNames = classNamesArray.join(" ");

    return(
        <div style={style} className={classNames} onClick={props.onClick}>
            <div style={{gridColumn: 1}}>
                <p>{props.semester}</p>
            </div>
            <div style={{gridColumn: 2}}>
                <p>{props.subject}</p>
            </div>
            <div style={{gridColumn: 3}} className={"CellOverflow"}>
                <p>{props.title}</p>
            </div>
        </div>
    )
};

export default MCQTableElement;
