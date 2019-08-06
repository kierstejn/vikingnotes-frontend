import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import './Toolbar.css';
import 'semantic-ui-css/semantic.min.css';


const toolbar = props => (
    <div className="Menu" style={props.style}>
        <Menu size="large">
            {props.isAuthenticated ?
                <Fragment>
                    <Menu.Item name="Quizzer">
                        <NavLink to="/mcq/list">Quizzer</NavLink>
                    </Menu.Item>
                    <Menu.Item name="CreateMCQ">
                        <NavLink to="/mcq/create">Opret quiz</NavLink>
                    </Menu.Item>

                    <Menu.Menu position="right">
                        <Menu.Item
                            name="Logout"
                        >
                            <NavLink to="/logout">Log ud</NavLink>
                        </Menu.Item>
                    </Menu.Menu>
                </Fragment>

                :
                <Fragment>
                    <Menu.Menu position="right">
                        <Fragment>
                            <Menu.Item name="Register">
                                <NavLink to="/register">Opret bruger</NavLink>
                            </Menu.Item>

                            <Menu.Item name="Login">
                                <NavLink to="/login">Log ind</NavLink>
                            </Menu.Item>
                        </Fragment>
                    </Menu.Menu>
				</Fragment>
            }
        </Menu>



    </div>
);

export default toolbar;
