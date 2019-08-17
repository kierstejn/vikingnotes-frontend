import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import * as actions from '../../../store/actions';
import BookView from './BookView';
import PropTypes from "prop-types";

class Book extends Component {



	render(){

		const { id } = this.props.match.params;

		let book = null

		if(id == 1){
			book = {
				title: "Forskning i sundhed - 2. udgave",
				chapters: 5
			}
		} else if(id == 2){
			book = {
				title: "Medicin - 2. udgave",
				chapters: 7
			}
		} else {
			book = {
				title: "Klinisk neuropsykiatri - 3. udgave",
				chapters: 3
			}
		}

		return(
			<BookView book={book}/>
		);
	}
}

Book.propTypes = {
};

export default connect()(withRouter(Book));
