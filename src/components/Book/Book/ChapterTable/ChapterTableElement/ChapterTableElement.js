import React from 'react';
import * as styles from './ChapterTableElement.module.css';


const chapterTableElement = (props) => {

    return(
        <div style={props.style} className={styles.ChapterTableElement} onClick={props.onClick}>
			<p>Kapitel {props.chapter}</p>
        </div>
    )
};

export default chapterTableElement;
