import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toolbar from './Toolbar/Toolbar';
import Logo from '../../assets/images/LOGO-RØD-1.jpg';
import './Layout.css';
import Footer from './Footer/Footer';
import * as actions from "../../store/actions";
import connect from "react-redux/es/connect/connect";


class Layout extends Component {

    render(){

        const {role, isAuthenticated, children} = this.props;

        const layoutStyle = {
            display: 'grid',
            gridTemplateRows: '130px 50px auto 50px',
            gridTemplateColumns: '1fr',
            minHeight: '100vh'
        };

        const topBarStyle = {
            gridRow: 1,
            height: '100%',
            backgroundColor: '255',
            textAlign: 'center'
        };

        const pictureStyle = {
            height: '100px',
            margin: '15px'
        };

        return (
            <div className={"Layout"} style={layoutStyle}>
                <div style={topBarStyle}>
                    <img src={Logo} style={pictureStyle}/>
                </div>

                <Toolbar role={role} isAuthenticated={isAuthenticated} style={{gridRow: 2, height: '100%'}}/>

                <div style={{gridRow: 3}}>
                    <div>
                        {children}
                    </div>
                </div>
                <Footer style={{gridRow: 4}}/>
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



