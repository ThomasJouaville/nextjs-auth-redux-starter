import axios from 'axios';
import { LOGIN, LOGOUT } from '../types';
import { API_URL_ENDPOINT } from '../../utils/api';
import redirectTo from '../../utils/redirect';

// register user
const register = ({ name, email, password }) => {
  return () => {
    axios
      .post(
        `${API_URL_ENDPOINT}/register`,
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        },
      )
      .then(() => {
        redirectTo('/signin');
      })
      .catch(error => {
        console.log(error);
      });
  };
};

// gets token from the api and stores it in the redux store
// cookie is flag httpOnly (means created server-side)
const login = ({ email, password }) => {
  return dispatch => {
    axios
      .post(
        `${API_URL_ENDPOINT}/login`,
        { email, password },
        {
          withCredentials: true,
        },
      )
      .then(response => {
        redirectTo('/dashboard');

        dispatch({
          type: LOGIN,
          payload: response.data.token,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = token => {
  return dispatch => {
    dispatch({ type: LOGIN, payload: token });
  };
};

// removing the token
const logout = () => {
  return dispatch => {
    axios
      .get(`${API_URL_ENDPOINT}/logout`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch({ type: LOGOUT });
        redirectTo('/');
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export default {
  register,
  login,
  reauthenticate,
  logout,
};
