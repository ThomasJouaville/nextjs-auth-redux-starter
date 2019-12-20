import { LOGIN, LOGOUT, USER } from '../types';

const initialState = {
  token: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload };

    case LOGOUT:
      return { token: null };

    case USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default authReducer;
