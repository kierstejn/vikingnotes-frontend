import React from 'react';
import * as styles from './Navbar.module.css'
import NavbarItem from './NavbarItem/NavbarItem';

class Navbar extends React.Component {

    state = {
        isOpen: false,
        isMobile: false
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    render() {

        let toolbarStyle = {
            gridRow: 1,
            gridColumn: 1
        };

        return (
            <div className={styles.Navbar} style={toolbarStyle}>
                <div className={styles.NavbarItems}>
                    <NavbarItem>Venstre</NavbarItem>
                    <NavbarItem>Hjem</NavbarItem>
                    <NavbarItem>Menu</NavbarItem>
                </div>
            </div>
        );
    }
}

export default Navbar
