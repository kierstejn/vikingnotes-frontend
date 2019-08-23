import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from "prop-types";

import LoginView from './LoginView'
import * as actions from '../../../store/actions'
import {updateObject} from '../../../util/updateObject'

class Login extends Component {

    state = {
        email: '',
        password: ''
    };

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleLogin = (event) => {
        event.preventDefault();
        this.props.onLogin(this.state.email, this.state.password);
        this.setState({email: '', password: ''});
    };

    render (){

        const { password, email } = this.state;
        const { error, isLoading, isAuthenticated } = this.props;

        return (
            <LoginView
                email={email}
                password={password}
                handleInputChange={this.handleInputChange}
                handleLogin={this.handleLogin}
                isLoading={isLoading}
                isAuthenticated={isAuthenticated}
                error={error}
            />
        )
    }
}

Login.propTypes = {
    onLogin: PropTypes.func,
    isLoading: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => {
    return {
        isLoading: state.authentication.loadingLogin,
        error: state.authentication.errorLogin,
        isAuthenticated: state.authentication.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch( actions.loginInitiate(email, password) ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps )( Login );
