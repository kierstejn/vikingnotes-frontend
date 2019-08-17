import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Logout from '../components/Authentication/Logout/Logout';
import MCQListPage from './MCQListPage';
import MCQPage from './MCQpage'
import CreateMCQPage from './CreateMCQPage';
import CreateBookPage from './CreateBookPage';

class CreateMCQ extends Component {}

	let routes = (
	<Switch>
		<Route path="/auth" component={asyncAuth} />
		<Route path="/" exact component={BurgerBuilder} />
		<Redirect to="/" />
	</Switch>
        );

        if ( this.props.isAuthenticated ) {
	    routes = (
		<Switch>
			<Route path="/checkout" component={asyncCheckout} />
			<Route path="/orders" component={asyncOrders} />
			<Route path="/logout" component={Logout} />
			<Route path="/auth" component={asyncAuth} />
			<Route path="/" exact component={BurgerBuilder} />
			<Redirect to="/" />
		</Switch>
	    );
}
    <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/logout" component={Logout} />
        <Route path="/mcq/list" component={MCQListPage}/>
        <Route path={"/mcq/create"} component={CreateMCQPage}/>
        <Route path={"/mcq/:id"} component={MCQPage}/>
		<Route path={"/book/create"} component={CreateBookPage}/>
        <Route path="/" component={() => (<div>index</div>)} />
    </Switch>
);
