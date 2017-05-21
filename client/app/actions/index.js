import axios from 'axios';
import { Redirect } from 'react-router-dom';
const ROOT_URL = 'http://localhost:3000';

export function signinUser({email,password}) {
    return function (dispatch)  {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                console.log(response);
                // <Redirect push to="/protected" />
               
            })
            .catch(() => {
                
            });
   }
}
