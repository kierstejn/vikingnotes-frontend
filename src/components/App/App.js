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
import * as styles from './App.module.css';


class App extends Component {

    render () {
        let routes = (
            <Switch>
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={RegisterPage} />
                <Redirect to="/login" />
            </Switch>
        );

        if ( this.props.isAuthenticated ) {
            routes = (
				<Switch>
					<Route path="/logout" component={Logout} />
					<Route path="/mcq/list" component={MCQListPage}/>
					<Route path="/mcq/create" component={CreateMCQPage}/>
					<Route path="/mcq/:id" component={MCQPage}/>
					<Redirect to="/mcq/list" />
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

export default withRouter( connect( mapStateToProps )( App ) );

