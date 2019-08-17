import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import './ChapterTable.module.css';
import Box from '../../../shared/UI/Box/Box';
import ChapterElement from './ChapterTableElement/ChapterTableElement';

class chapterTable extends Component {

	onClickHandler = () => {
		this.props.history.push("/mcq/15")
	};

    render() {

    	return (
			<div className={'BookTable'}>
				<ChapterElement
					onClick={this.onClickHandler}
					chapter={1}
				/>
				<ChapterElement
					chapter={2}
					onClick={this.onClickHandler}
				/>
				<ChapterElement
					chapter={3}
					onClick={this.onClickHandler}
				/>
				<ChapterElement
					chapter={4}
					onClick={this.onClickHandler}
				/>
				<ChapterElement
					chapter={5}
					onClick={this.onClickHandler}
				/>
			</div>
		)
    }
}


export default withRouter(chapterTable);
