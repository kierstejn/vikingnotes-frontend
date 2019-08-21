import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'

import Input from '../../shared/UI/Input/Input';
import Button from '../../shared/UI/Button/Button';
import styles from './RegisterView.module.css'
import Spinner from '../../shared/UI/Spinner/Spinner';


const registerView = (props) => {

    const {email, password, handleInputChange, handleRegister, isLoading, isAuthenticated} = props;

    const style = {
        display: 'grid',
        gridTemplateRows: '35px 35px 35px',
        gridRowGap: '10px'
    };

    let redirect = null;
    if(isAuthenticated){
        redirect = <Redirect to={"/"}/>
    }

    return (
        <div className={styles.LoginView}>
            {redirect}
            {isLoading ? <Spinner/> :
                <Fragment>
                    <h3 style={{gridRow: 1}}>OPRET BRUGER</h3>
                    <form action="" style={style}>
                        <div style={{gridRow: 1}}>
                            <Input
                                onChange={handleInputChange}
                                value={email}
                                name={"email"}
                                placeholder={"email"}
                                type={"email"}
                            />
                        </div>
                        <div style={{gridRow: 2}}>
                            <Input
                                onChange={handleInputChange}
                                value={password}
                                name={"password"}
                                placeholder={"password"}
                                type={"password"}
                            />
                        </div>
                        <Button onClick={handleRegister} type={"submit"} style={{color: "green", gridRow: 3}}>OPRET BRUGER</Button>
                    </form>
                </Fragment>
            }
        </div>
    )
};

registerView.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleRegister: PropTypes.func,
    isLoading: PropTypes.bool,
    isAuthenticated: PropTypes.bool
};

export default registerView
