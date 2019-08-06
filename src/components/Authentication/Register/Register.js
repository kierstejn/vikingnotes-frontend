import React, { Component } from 'react';
import {connect} from 'react-redux'

import RegisterView from './RegisterView'
import * as actions from '../../../store/actions'
import PropTypes from "prop-types";

class Register extends Component {

    state = {
        email: '',
        password: '',
    };

    handleInputChange = (event) => {
        event.persist();
        this.setState({[event.target.name]: event.target.value})
    };

    handleRegister = (event) => {
        event.preventDefault();
        this.props.onRegister(this.state.email, this.state.password);
        this.setState({email: '', password: ''});
    };

    render (){

        const { password, email } = this.state;

        return (
            <RegisterView
                email={email}
                password={password}
                handleInputChange={this.handleInputChange}
                handleRegister={this.handleRegister}
                isLoading={this.props.isLoading}
                isAuthenticated={this.props.isAuthenticated}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        isLoading: state.authentication.loadingRegister,
        isAuthenticated: state.authentication.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRegister: (email, password) => dispatch( actions.registerInitiate(email, password) ),
    };
};

Register.propTypes = {
    onRegister: PropTypes.func,
    isLoading: PropTypes.bool,
    isAuthenticated: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps )( Register );
