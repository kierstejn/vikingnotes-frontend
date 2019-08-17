import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import * as actions from '../../../store/actions';
import BookListView from './BookListView';
import PropTypes from "prop-types";

class BookList extends Component {

    handleClick = (id) => {
		this.props.history.push("/book/" + id);
    };

    render(){
        return(
            <BookListView onClickHandler={this.handleClick}/>
        );
    }
}

BookList.propTypes = {
};

export default connect()(withRouter(BookList));
