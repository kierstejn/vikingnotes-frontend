import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import Logout from '../Authentication/Logout/Logout';
import MCQListPage from '../../pages/MCQListPage';
import MCQPage from '../../pages/MCQpage'
import CreateMCQPage from '../../pages/CreateMCQPage';
import Layout from '../../hoc/Layout/Layout'
import BookListPage from '../../pages/BookListPage';
import * as styles from './App.module.css';
import BookPage from '../../pages/BookPage';
import * as actions from '../../store/actions'
import CreateBookPage from '../../pages/CreateBookPage';


class App extends Component {

    componentDidMount () {
        this.props.onTryAutoSignup();
    }

    render () {
        let routes = (
            <Switch>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/register" exact component={RegisterPage}/>
                <Route path="/" component={LoginPage}/>
            </Switch>
        );

        if ( this.props.isAuthenticated ) {
            routes = (
                <Switch>
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/mcq/list" exact component={MCQListPage}/>
                    <Route path="/mcq/create" exact component={CreateMCQPage}/>
                    <Route path="/mcq/:id" exact component={MCQPage}/>
                    <Route path="/book/list" exact component={BookListPage}/>
                    <Route path="/book/create" exact component={CreateBookPage}/>
                    <Route path="/book/:id" exact component={BookPage}/>
                    <Route path="/" component={BookListPage} />
                </Switch>
            );
        }

        return (
            <div className={styles.App}>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authentication.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch( actions.authCheckState() )
    };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );

