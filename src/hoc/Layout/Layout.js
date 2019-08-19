import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";

import Toolbar from './Navigation/Toolbar/Toolbar'
import Logo from '../../assets/images/vikingnotes.png';
import * as styles from './Layout.module.css';
import Footer from './Footer/Footer';



class Layout extends Component {

    render(){

        const {role, isAuthenticated, children} = this.props;

        return (
            <div className={styles.layout}>
                <Toolbar isAuthenticated={isAuthenticated}/>
                <div>
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



