import { LOGIN, LOGIN_FALSE, LOGIN_TRUE, QUIT } from './constants';
import { auth } from '../utils/FirebaseDB/FirebaseDB';

function localStorageAuth() {
  switch (localStorage.getItem('isAuth')) {
    case LOGIN_TRUE:
      return true;
    case LOGIN_FALSE:
      localStorage.removeItem('uidTravel');
      return false;
    default:
      localStorage.removeItem('uidTravel');
      return false;
  }
}

const initialState = {
  auth: localStorageAuth(),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, auth: true };
    case QUIT:
      localStorage.setItem('isAuth', 'false');
      localStorage.removeItem('uidTravel');
      auth.signOut();
      return { ...state, auth: false };
    default:
      return state;
  }
};

export default authReducer;
