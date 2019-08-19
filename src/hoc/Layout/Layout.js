import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";

import Navbar from './Navbar/Navbar';
import Logo from '../../assets/images/vikingnotes.png';
import * as styles from './Layout.module.css';
import Footer from './Footer/Footer';



class Layout extends Component {

    render(){

        const {role, isAuthenticated, children} = this.props;

        return (
            <div className={styles.layout}>
                <div className={styles.layout__topbar}>
                    <img src={Logo} className={styles.layout__topbarImage}/>
                </div>
                <Navbar/>
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



