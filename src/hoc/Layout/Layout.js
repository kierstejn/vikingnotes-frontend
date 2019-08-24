import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";

import Toolbar from './Navigation/Toolbar/Toolbar'
import * as styles from './Layout.module.css';
import Footer from './Footer/Footer';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';



class Layout extends Component {

	state = {
	    showSideDrawer: true
	}

	sideDrawerClosedHandler = () => {
	    this.setState( { showSideDrawer: false } );
	}

	sideDrawerToggleHandler = () => {
	    this.setState( ( prevState ) => {
	        return { showSideDrawer: !prevState.showSideDrawer };
	    } );
	};

	render(){

	    const {role, isAuthenticated, children} = this.props;

	    return (
	        <div className={styles.layout}>
	            <Toolbar
	                open={this.state.showSideDrawer}
	                isAuthenticated={isAuthenticated}
	                drawerToggleClicked={this.sideDrawerToggleHandler} />
	            <SideDrawer
	                isAuthenticated={this.props.isAuthenticated}
	                open={this.state.showSideDrawer}
	                drawerToggleClicked={this.sideDrawerToggleHandler}
	                closed={this.sideDrawerClosedHandler} />
	            <div className={styles.content}>
	                {children}
	            </div>
	            <Footer/>
	        </div>
	    )
	}
}


Layout.propTypes = {
    role: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
    role: "user"
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authentication.token !== null
    }
};

export default connect(mapStateToProps)( Layout );



