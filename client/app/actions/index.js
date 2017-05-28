import axios from 'axios';
import { AUTH_USER,AUTH_ERROR,UNAUTH_USER,FETCH_MESSAGE } from './types';
const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }, history) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                console.log(response);

                // <Redirect push to="/protected" />
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                history.push('/protected');
            })
            .catch(() => {
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function signupUser({ email, password }, history) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then((response) => {
                console.log("res ", response);
                 dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                history.push('/protected');
            }, (e) => {
                console.log("err ", e.response.data.error);
                 dispatch(authError(e.response.data.error));
            });
            
    }
}

export function fetchMessage() {

    return function (dispatch) {
        axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(response => { 
                dispatch({
                    type: FETCH_MESSAGE,
                    payload:response.data.message
                });
             });
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}
