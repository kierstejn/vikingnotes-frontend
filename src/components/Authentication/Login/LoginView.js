import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import Input from '../../shared/UI/Input/Input';
import Button from '../../shared/UI/Button/Button';
import styles from './LoginView.module.css'
import Spinner from '../../shared/UI/Spinner/Spinner';

const loginview = (props) => {

    const {email, password, handleInputChange, handleLogin, isLoading, isAuthenticated, error} = props;

    const style = {
        display: 'grid',
        gridTemplateRows: '35px 35px 35px',
        gridRowGap: '10px'
    };

    let redirect = null;
    if(isAuthenticated){
        redirect = <Redirect to={"/"}/>
    }

    let errorMessage = null;
    if(error){
    	errorMessage = <p>{error.message}</p>
    }

    return (
    	<div className={styles.LoginView}>
            {redirect}
            {isLoading ? <Spinner/> :
                <Fragment>
                    <h3 style={{gridRow: 1}}>Login</h3>
                    {errorMessage}
                    <form onSubmit={handleLogin} style={style}>
                        <div style={{gridRow: 1}}>
                            <Input
                                onChange={handleInputChange}
                                value={email}
                                name={"email"}
                                placeholder={"email"}
                                type={"email"}
                                required
                            />
                        </div>
                        <div style={{gridRow: 2}}>
                            <Input
                                onChange={handleInputChange}
                                value={password}
                                name={"password"}
                                placeholder={"password"}
                                type={"password"}
                                required
                            />
                        </div>
                        <Button type={"submit"} style={{color: "green", gridRow: 3}}>LOGIN</Button>
                    </form>
                </Fragment>
            }
        </div>
    )
};

loginview.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleLogin: PropTypes.func,
    isLoading: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    error: PropTypes.string
};

export default loginview


