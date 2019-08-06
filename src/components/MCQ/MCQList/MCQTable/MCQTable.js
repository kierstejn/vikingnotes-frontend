import React, {Fragment} from 'react';
import './MCQTable.css';
import Box from '../../../shared/UI/Box/Box';
import MCQTableElement from './MCQTableElement/MCQTableElement';

const mcqtable = (props) => {


    let list = null;

    if(props.list !== null){
        list = props.list.map(item => {
            return (
                <MCQTableElement
                    semester={item.semester}
                    subject={item.subject}
                    title={item.title}
                    hover={true}
                    onClick={(e) => props.onClick(e,item.id)} key={item.id}
                />
            )
        });
    }

    return (
        <Fragment>
            <div className={"MCQTableHeader"}>
                <MCQTableElement
                    semester={"Sem."}
                    subject={"Fag"}
                    title={"Titel"}
                    style={{backgroundColor: 'rgb(122, 143, 157)', color: 'white'}}
                />
            </div>
            <div className={'MCQTable'}>
                {list}
            </div>
        </Fragment>
    );
};

export default mcqtable;
