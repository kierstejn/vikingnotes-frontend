import * as actionTypes from '../actionTypes';


export const registerStart = () => {
    return{
        type: actionTypes.REGISTER_START
    }
};

export const registerInitiate = (email, password) => {
    return {
        type: actionTypes.REGISTER_INITIATE,
        email: email,
        password: password
    };
};

export const registerSuccess = () => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
    };
};

export const registerFail = (error) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        error: error
    };
};

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

export const loginInitiate = (email, password) => {
    return {
        type: actionTypes.LOGIN_INITIATE,
        email: email,
        password: password
    };
};

export const loginSuccess = (token, email) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        email: email
    };
};

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
};


export const logoutInitiate = () => {
    return {
        type: actionTypes.LOGOUT_INITIATE
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    };
};


//
// export const onRegister = (userAccount) => {
//     return dispatch => {
//         debugger;
//         dispatch(registerStart());
//         let url = '/users';
//         const {email, password, university} = userAccount;
//         const userAccountData = {
//             email: email,
//             password: password,
//             university: university
//         };
//         console.log(userAccountData);
//
//         axios.post(url, userAccountData)
//             .then(response => {
//                 console.log(response);
//                 //const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
//                 localStorage.setItem('token', response.data.token);
//                 localStorage.setItem('email',response.data.user.email);
//                 localStorage.setItem('userId', response.data.user.id);
//                 //localStorage.setItem('role', response.data.user.role);
//                 dispatch(registerSuccess());
//
//             })
//             .catch(error => {
//                 console.log(error);
//                 dispatch(registerFail(error));
//             });
//
//     }
//
// };
//
//
//
//
// //
// // export const checkAuthTimeout = (expirationTime) => {
// //     return dispatch => {
// //         setTimeout(() => {
// //             dispatch();
// //         }, expirationTime);
// //     };
// // };
//
//
// export const onAuth = (email, password) => {
//     return dispatch => {
//         dispatch(authStart());
//
//         let url = '/users/login';
//
//         const authData = {
//             email: email,
//             password: password
//         };
//         axios.post(url, authData)
//             .then(response => {
//                 console.log(response);
//
//                 localStorage.setItem('token', response.data.token);
//                 //localStorage.setItem('expirationDate', expirationDate)
//                 localStorage.setItem('userId', response.data.user.id);
//                 localStorage.setItem('email', response.data.user.email);
//                 //localStorage.setItem('role', response.data.user.role);
//                 dispatch(authSuccess(response.data.id, response.data.email));
//                 dispatch(authSuccess(response.data.token, response.data.user.id, response.data.user.email));
//             })
//             .catch(err => {
//
//                 console.log(err);
//                 dispatch(authFail(err));
//             });
//     }
//
// };
//
// export const authCheckState = () => {
//     return dispatch => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             dispatch(onLogout());
//         } else {
//             const userId = localStorage.getItem('userId');
//             const email = localStorage.getItem('email');
//             //const role = localStorage.getItem('role');
//             dispatch(authSuccess(token, userId, email));
//             //dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
//         }
//     };
// };
