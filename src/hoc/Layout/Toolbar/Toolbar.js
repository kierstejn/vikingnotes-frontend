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
					<Menu.Item name="Books">
						<NavLink style={{color: "rgb(120,14,33)"}} to="/book/list">Bøger</NavLink>
					</Menu.Item>
                    <Menu.Item name="Quizzer">
                        <NavLink style={{color: "rgb(120,14,33)"}} to="/mcq/list">Quizzer</NavLink>
                    </Menu.Item>
                    <Menu.Item name="CreateMCQ">
                        <NavLink style={{color: "rgb(120,14,33)"}} to="/mcq/create">Opret quiz</NavLink>
                    </Menu.Item>
					<Menu.Item name="CreateMCQ">
						<NavLink style={{color: "rgb(120,14,33)"}} to="/book/create">Opret bog</NavLink>
					</Menu.Item>

                    <Menu.Menu position="right">
                        <Menu.Item
                            name="Logout"
                        >
                            <NavLink style={{color: "rgb(120,14,33)"}} to="/logout">Log ud</NavLink>
                        </Menu.Item>
                    </Menu.Menu>
                </Fragment>

                :
                <Fragment>
                    <Menu.Menu position="right">
                        <Fragment>
                            <Menu.Item name="Register">
                                <NavLink style={{color: "rgb(120,14,33)"}} to="/register">Opret bruger</NavLink>
                            </Menu.Item>

                            <Menu.Item name="Login">
                                <NavLink style={{color: "rgb(120,14,33)"}} to="/login">Log ind</NavLink>
                            </Menu.Item>
                        </Fragment>
                    </Menu.Menu>
                </Fragment>
            }
        </Menu>



    </div>
);

export default toolbar;
