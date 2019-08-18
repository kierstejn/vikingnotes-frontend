import React, {Fragment} from 'react';
import './BookTable.css';
import Box from '../../../shared/UI/Box/Box';
import BookTableElement from './BookTableElement/BookTableElement';
import BookImage1 from '../../../../assets/images/medicinbog1.jpg';
import BookImage2 from '../../../../assets/images/medicinbog2.jpg';
import BookImage3 from '../../../../assets/images/medicinbog3.jpg';

const bookTable = (props) => {

    let style = {
        display: 'grid',
        gridTemplateColumns: 'minmax(100px,150px) minmax(150px,1fr) minmax(150px,1fr) 150px',
        gridTemplateRows: '50px',

    };

    return (
        <div className={'BookTable'}>
            <div className={"Header"} style={style}>
                <div style={{gridColumn: 2}}>
                    <p>{"Titel"}</p>
                </div>
                <div style={{gridColumn: 3}}>
                    <p>{"Forfattere"}</p>
                </div>
                <div style={{gridColumn: 4}}>
                    <p>{"Udgave"}</p>
                </div>
            </div>
            <BookTableElement
                image={BookImage2}
                title={"Forskning i sundhed"}
                author={"Per Soelberg Sørensen, Bo Baslund, Ulla Feldt-Rasmussen, Jens Kastrup"}
                edition={"2. udgave"}
				onClick={() => props.onClickHandler(1)}
            />
			<BookTableElement
				image={BookImage1}
				title={"Medicin"}
				author={"Jesper Krogh, Simon Francis Thomsen"}
				edition={"2. udgave"}
				onClick={() => props.onClickHandler(2)}
			/>
			<BookTableElement
				image={BookImage3}
				title={"Klinisk neuropsykiatri"}
				author={"Poul Videbech, Raben Rosenberg"}
				edition={"3. udgave"}
				onClick={() => props.onClickHandler(3)}
			/>
        </div>
    );
};

export default bookTable;
