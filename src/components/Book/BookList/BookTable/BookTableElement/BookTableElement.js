import React from 'react';
import * as styles from './BookTableElement.module.css';


const bookTableElement = (props) => {

    let style = {
        display: 'grid',
        gridTemplateColumns: '80px minmax(150px,1fr) minmax(150px,1fr) 150px',
        gridTemplateRows: '120px',

    };


    if(props.style){
        style = Object.assign(style, props.style)
    }

    return(
        <div style={style} className={styles.BookTableElement} onClick={props.onClick}>
			<div style={{justifySelf: 'center', alignSelf: 'center', gridColumn: 1}}>
				{props.image ? <img src={props.image} className={styles.BookTableElementImage} alt={"BookImage"}/> : null}
			</div>
			<div style={{gridColumn: 2}}>
				<p>{props.title}</p>
			</div>
            <div style={{gridColumn: 3}}>
                <p>{props.author}</p>
            </div>
            <div style={{gridColumn: 4}} className={styles.CellOverflow}>
                <p>{props.edition}</p>
            </div>
        </div>
    )
};

export default bookTableElement;
