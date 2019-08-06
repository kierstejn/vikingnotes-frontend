import React, { Component, Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

class Modal extends Component {
    render() {
        return (

            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.close} />
                <div
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props ? '1' : 0,
                    }}
                >
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default Modal;
