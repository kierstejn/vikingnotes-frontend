import React from 'react';
import styles from "./TextArea.module.css";

const textArea = (props) => {

    const {valid, showValidity, style, onChange, value, placeholder, name, rows} = props;

    let classNames = [styles.TextAreaElement];

    if (!valid && showValidity) {
        classNames.push(styles.Invalid);
    }

    const className = classNames.join(' ');

    return (
        <textarea
            style={style}
            className={className}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            name={name}
            rows={rows}
        />
    );
};

export default textArea;
